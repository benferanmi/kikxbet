import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import AppleProvider from 'next-auth/providers/apple';
import { Sequelize, DataTypes } from 'sequelize';
import mysql2 from 'mysql2';
import bcrypt from 'bcrypt';

// Initialize Sequelize only once using a global variable
const globalAny = global;

if (!globalAny.sequelize) {
    const sequelize = new Sequelize({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        dialect: 'mysql',
        dialectModule: mysql2,
        benchmark: true,
    });

    // Define the User model
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true, // Allow null for social logins
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        referral_code: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'USER',
        },
        fcmToken: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'ACTIVE',
        },
        // Add any additional fields as needed
    }, {
        tableName: 'users', // Ensure it matches your existing table name
        timestamps: true,
    });

    globalAny.sequelize = sequelize;
    globalAny.User = User;

    // Remove sequelize.sync({ alter: true }) to prevent repeated migrations
    (async () => {
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
            // You can handle migrations externally instead of syncing here
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    })();
}

const User = globalAny.User;

const authOptions = {
    providers: [
        // Credentials Provider
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text", placeholder: "your-email@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // Find the user by email
                const user = await User.findOne({ where: { email: credentials.email } });
                if (!user) {
                    throw new Error('No user found with the given email');
                }

                // Check password
                if (!user.password) {
                    throw new Error('No password set for this user');
                }

                const isValid = await bcrypt.compare(credentials.password, user.password);
                if (!isValid) {
                    throw new Error('Invalid password');
                }

                return { id: user.id, name: user.username, email: user.email };
            }
        }),
        // Google Provider
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // Facebook Provider
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
        // Apple Provider
        AppleProvider({
            clientId: process.env.APPLE_CLIENT_ID,
            clientSecret: {
                appleId: process.env.APPLE_ID,
                teamId: process.env.APPLE_TEAM_ID,
                privateKey: process.env.APPLE_PRIVATE_KEY,
                keyId: process.env.APPLE_KEY_ID,
            },
        }),
        // Add more providers as needed
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        // Called whenever a user signs in
        async signIn({ user, account, profile, email, credentials }) {
            // If signing in with a social provider, find or create the user in Sequelize
            if (account.provider !== 'credentials') {
                const existingUser = await User.findOne({ where: { email: user.email } });
                if (!existingUser) {
                    // Create a new user
                    const newUser = await User.create({
                        username: profile.name || profile.login || 'Unnamed',
                        email: user.email,
                        // You can store provider information if needed
                        // password is null for social logins
                    });
                    user.id = newUser.id;
                } else {
                    user.id = existingUser.id;
                }
            }
            return true;
        },
        // Include user ID in the token
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        // Make user ID available in the session
        async session({ session, token }) {
            if (token && session.user) {
                session.user.id = token.id;
            }
            return session;
        }
    },
    jwt: {
        secret: process.env.JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET_CUS,
    debug: true,
    page: {
        signIn: "api/auth/signin",
    }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }