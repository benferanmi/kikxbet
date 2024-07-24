
import Link from 'next/link';
import './challange.css';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';



const Challange = () => {
    return (
        <main>
            <Header />
            <section className="hero-sections">
                <div className="hero-section">
                    <div className="hero-content">
                        <h1>KIKXBET: Elevate Your Sports Betting Game
                        </h1>

                        <p>Welcome to KIKXBET, where passion meets profitability in sports betting. Our platform offers tailored challenges to identify and nurture top betting talents, providing the opportunity to bet with real money and share in the profits.
                        </p>

                        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                            <Link className="hero-button" href='/promotion' style={{ cursor: 'pointer' }}><span>Registration Now</span></Link>
                        </div>
                    </div>
                </div>
            </section>


            <div className='challange-head'>
                <div className='challange-head-cont'>
                    <h2>Our Unique Challenge Packs
                    </h2>
                    <p>Our Unique Challenge Packs offer thrilling game series designed to test your skills and boost your rewards. Complete challenges to unlock exclusive bonuses and prizes!</p>
                </div>
            </div>


            <div className='challange-infos'>
                <div className='challange-info'>
                    <div className="challange-info-eachs" >
                        <div className='challange-info-each'>
                            <h2>Free Trail</h2>

                            <ul>
                                <li>Cost**: $0</li>
                                <li> Perfect for beginners to test our platform</li>
                                <li>Starting Balance: $1,000 (virtual)</li>
                                <li>Duration**: 7 days</li>
                            </ul>
                        </div>
                    </div>
                    <div className="challange-info-eachs" >
                        <div className='challange-info-each'>
                            <h2>Phase 1: Verification</h2>

                            <ul>
                                <li> Cost: $30</li>
                                <li>Profit Target: 10% in 45 days</li>
                                <li> Max Total Loss: 20%</li>
                                <li>Starting Balance: $10,000</li>
                                <li> Max Daily Loss: 10%</li>
                                <li> Min Betting Days: 20 days</li>
                            </ul>
                        </div>
                    </div>
                    <div className="challange-info-eachs" >
                        <div className='challange-info-each'>
                            <h2>Phase 3: High-Value Portfolio</h2>

                            <ul>
                                <li> Cost: $100</li>
                                <li>Profit Target: 15% in 90 day</li>
                                <li>Max Total Loss: 10%</li>
                                <li>Profit Split: 70% to trader / 30% to KIKXBET</li>
                                <li>Starting Balance: $10,000</li>
                                <li> Max Daily Loss: 5%</li>
                                <li>Min Betting Days: 30 days</li>
                            </ul>
                        </div>
                    </div>

                    <div className="challange-info-eachs" >
                        <div className='challange-info-each'>
                            <h2>Phase 1: Initial Evaluation</h2>

                            <ul>
                                <li>Cost: $75</li>
                                <li>Starting Balance: $50,000</li>
                                <li> Max Total Loss: 20%</li>
                                <li>Profit Target: 10% in 45 days</li>
                                <li>Max Daily Loss: 10%</li>
                                <li>Min Betting Days: 15 days</li>
                            </ul>
                        </div>
                    </div>
                    <div className="challange-info-eachs" >
                        <div className='challange-info-each'>
                            <h2>Phase 2: Verification</h2>

                            <ul>
                                <li>Cost: Free if Phase 1 passed ($150 otherwise)</li>
                                <li>Profit Target: 12% in 60 days</li>
                                <li>Max Total Loss: 15%</li>
                                <li>Starting Balance: $50,000</li>
                                <li>Max Daily Loss: 8%</li>
                                <li>Min Betting Days: 20 days</li>
                            </ul>
                        </div>
                    </div>
                    <div className="challange-info-eachs" >
                        <div className='challange-info-each'>
                            <h2>Phase 3: High-Value Portfolio</h2>

                            <ul>
                                <li>Cost: $500</li>
                                <li>Profit Target: 15% in 90 days</li>
                                <li>Max Total Loss: 10%</li>
                                <li>Profit Split: 70% to trader / 30% to KIKXBET</li>
                                <li>Starting Balance: $100,000</li>
                                <li>Max Daily Loss: 5%</li>
                                <li>Min Betting Days: 30 days</li>
                            </ul>
                        </div>
                    </div>
                    <div className="challange-info-eachs" >
                        <div className='challange-info-each'>
                            <h2>Why Choose KIKXBET?</h2>

                            <span>
                                <ol>
                                    <li> Real Money Betting: Prove your skills and bet with our capital</li>
                                    <li> Risk-Free Start: Begin with our Free Trial to test your strategies</li>
                                    <li> Tailored Challenges: From Rookie to Senior, we have a path for every skill level</li>
                                    <li>4  Educational Resources: Access our library of betting strategies and market analyses</li>
                                    <li> Community Support: Join a network of professional sports bettors</li>
                                    <li> Innovative Platform: Experience interactive and immersive sports betting</li>
                                </ol>
                            </span>
                        </div>
                    </div>
                    <div className="challange-info-eachs" >
                        <div className='challange-info-each'>
                            <h2>Responsible Gambling</h2>
                            <p>At KIKXBET, we prioritize responsible gambling practices. Utilize our bankroll management tools and educational resources to bet responsibly. Our Performance Coaches are available to help you maintain psychological stability and emotional control, ensuring a healthy betting experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='challange-abouts'>
                <div className='challange-about'>

                    <div className='challange-a-head'>
                        <h2>Ready To Begin?</h2>
                    </div>

                    <div className='challange-a-body'>
                        <div className='challange-a-grid'>
                            <div className='challange-agleft'>
                                <div className='challange-agl'>
                                    <h2>What Our Client Say
                                    <br />
                                        About <span> KIKXBET</span></h2>

                                    <p>Collaboratively actualize excellent schemas without effective
                                        models. Synergistically engineer functionalized.</p>
                                </div>
                            </div>
                            <div className='challange-agright'>
                                <div className='challange-agr'>
                                    <div className='challange-agr-profile'>
                                        <Image
                                            src={'/assets/profile.png'}
                                            alt=""
                                            width={92}
                                            height={92}
                                            style={{ borderRadius: '6px' }}
                                        />

                                        <div className='chaagpname'><span>John D.Se </span><br /> UI/UX Designer</div>

                                    </div>

                                    <p>KIKXBET transformed my passion for sports betting into a profitable venture.</p>
                                    <Image
                                    src={'/assets/svg/quote.svg'}
                                    alt=""
                                    width={40}
                                    height={40}
                                    className='cagright-imgf'
                                />
                                </div>
                                <div className='chaagr-uder-swhite'></div>
                                
                            </div>
                        </div>

                    </div>
                    <div className='challange-buttons'>
                        <div className='challange-button'>
                            <button className='challange-but-each'>
                                Start Free Trial
                            </button>

                            <button className='challange-but-each'>
                                View Challange Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default Challange;