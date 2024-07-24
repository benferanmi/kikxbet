import './css/header.css';
import Image from 'next/image';

export default function Header() {
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
          </div>
        </div>
      </header>
    </>
  );
};
