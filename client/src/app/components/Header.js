
'use client';
import { useState } from 'react';
import './css/header.css';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                <select  >
                  <option defaultValue={'En'} >EN</option>
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
            <button className='nav-button login'>Login</button>
            <button className='nav-button signup'>Signup</button>
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

              <div className='mobile-hidden'>
                <HeaderNavMenu />
              </div>
            </div>

            <div className='mobile-hidden'>
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
};
