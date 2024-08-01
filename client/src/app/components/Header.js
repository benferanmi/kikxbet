'use client';
import './css/header.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const load = async () => {
      const token = Cookies.get('authToken');
      const userData = Cookies.get('userData');

      if (token && userData) {
        setUser(JSON.parse(userData));
      }
      setLoading(false);
    };
    load();
  }, []);

  const handleLogout = () => {
    // Remove cookies
    Cookies.remove('authToken');
    Cookies.remove('userData');
    // Set user state to null
    setUser(null);
    // Redirect to the main page
    router.push('/');
  };

  return (
    <>
      <header>
        <div className='nav-content'>
          <div className='nav-flex'>
            <div className='nav-left'>
              <div className='nav-logo'>
                <span>
                  <Image
                    src="/assets/logo.png"
                    alt="des"
                    width={28}
                    height={28}
                  />
                  <h1>KIKXBET</h1>
                </span>
              </div>

              <div className='nav-menu'>
                <ul>
                  <li><a href='/'>Home</a></li>
                  <li><a href='/livegames'>Live</a></li>
                  <li><a href='/sports'>Sport</a></li>
                  <li><a href='/virtual'>V-Sport</a></li>
                  <li><a href='/promotion'>Promotions</a></li>
                  <li><a href='/details'>Details</a></li>
                  <li><a href='/bets'>Quick Bets</a></li>
                </ul>
              </div>
            </div>
            <div className='nav-right'>
              <div className='navr-buttons'>
                <div className='accessibility'>
                  <div className='accessible-each'>
                    <div className='lang'>
                      <Image
                        src="/assets/world-icon.png"
                        alt="des"
                        width={16}
                        height={16}
                      />
                      <select>
                        <option defaultValue={'En'}>EN</option>
                      </select>
                    </div>
                    <div className='light'>
                      <Image
                        src="/assets/light-icon.png"
                        alt="des"
                        width={16}
                        height={16}
                      />
                    </div>
                  </div>
                </div>

                <div className='nav-buttons'>
                  {loading ? null : !user ? (
                    <div className='nav-buttons'>
                      <Link href='/auth/login' className='nav-button login'>Login</Link>
                      <Link href='/auth/signup' className='nav-button signup'>Signup</Link>
                    </div>
                  ) : (
                    <div className='nav-dropdown'>
                      <span
                        className='nav-button username'
                        onClick={() => setDropdownVisible(!dropdownVisible)}
                      >
                        Welcome, {user.username}
                      </span>
                      {dropdownVisible && (
                        <div className='dropdown-menu pointer'>
                          <div onClick={handleLogout} className='dropdown_item_logout'>Logout</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
