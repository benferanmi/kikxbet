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
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {
    const load = async () => {
      const token = Cookies.get('authToken');
      const userData = Cookies.get('userData');

      if (token && userData) {
        console.log(userData);
        setUser(userData);
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


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const HeaderNavMenu = () => {
    return (
      <div className='nav-menu'>
        <ul >
          <li><a href='/' >Home</a> </li>
          <li><a href='/livegames' >Live</a> </li>
          <li><a href='/sports' >Sport</a> </li>
          <li><a href='/virtual' >V-Sport</a> </li>
          <li><a href='/promotion' >Promotions</a> </li>
          <li><a href='/details' >Details</a> </li>
          <li><a href='/bets' >Quick Bets</a> </li>
        </ul>
      </div>
    );
  };

  const HeaderNavOthers = () => {
    return (
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

          <div className='navs-buttons'>
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
                  <div className='nav-profile'> <span>My Account</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" height={15} width={15}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg></div>

                  {/* {user.username} */}
                </span>
                {dropdownVisible && (
                  <div className='dropdown-menu profiledropdown pointer'>
                    <div className='profile-d-menu'>
                      <Link href={'/profile'}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" height={16} width={16}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                        My Account Info</Link>
                    </div>
                    <div className='profile-d-menu'>
                      <Link href={'/profile/payment'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" height={18} width={18}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                        </svg>
                        Deposit
                      </Link>
                    </div>
                    <div className='profile-d-menu'>
                      <Link href={'/profile/mybets'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21" height="18px" width="18px" class="m-list-item-icon svg-icon-base"><g fill="currentColor" fill-rule="evenodd"><path d="M2.83 18.81V2.998a1.82 1.82 0 011.813-1.825h3.02c.334 0 .604.272.604.608a1.82 1.82 0 001.812 1.825A1.82 1.82 0 0011.89 1.78c0-.336.27-.608.604-.608h3.02c.998 0 1.81.818 1.81 1.825V18.81a1.82 1.82 0 01-1.812 1.825h-3.02a.605.605 0 01-.603-.608 1.82 1.82 0 00-1.812-1.825c-1 0-1.812.819-1.812 1.825 0 .336-.27.608-.604.608h-3.02c-1 0-1.812-.818-1.812-1.825h0zM7.12 2.39H4.643a.606.606 0 00-.604.608V18.81c0 .336.27.609.604.609H7.12a3.029 3.029 0 012.959-2.433 3.03 3.03 0 012.959 2.433h2.475a.606.606 0 00.604-.61V2.999a.606.606 0 00-.604-.61h-2.476a3.03 3.03 0 01-2.96 2.434 3.028 3.028 0 01-2.958-2.433h0z" fill-rule="nonzero" stroke="currentColor" stroke-width=".3"></path><path d="M5.7 6.902h9v1.49h-9zm0 2.98h9v1.49h-9zm1 2.98h7v1.49h-7z"></path></g></svg>
                        Bet History
                      </Link>
                    </div>
                    <div onClick={handleLogout} className='dropdown_item_logout'>Logout</div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
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

              <div className='mobile-hidden sm-hidden md-hidden'>
                <HeaderNavMenu />
              </div>
            </div>

            <div className='mobile-hidden sm-hidden md-hidden'>
              <HeaderNavOthers />
            </div>

            <div className={`mobile-nav ${isMenuOpen ? 'mobile-nav-active' : ''}`}>
              <HeaderNavMenu />
              <br />
              <br />
              <HeaderNavOthers />
            </div>

            <button className='nav-menu-button' onClick={toggleMenu}>
              {isMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" height={'30px'} width={'30px'}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" height={'30px'} width={'30px'} >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              }
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
