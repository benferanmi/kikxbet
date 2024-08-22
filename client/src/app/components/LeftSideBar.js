"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './css/leftsidebar.css';
import Link from 'next/link';
import { AmericanFootballSvg, ArenaOfValorSvg, BaseballSvg, BasketballSvg, BoxingSvg, CricketSvg, CsgoSvg, DotaSvg, EHockey, EtennisSvg, FootballSvg, FrustalSvg, HandBallSvg, IceHockeySvg, MmaSvg, OwSvg, RainbowSvg, RocketLeagueSvg, RugbySvg, Sc2Svg, StarSvg, TableTennisSvg, TennisSvg, VolleyBallSvg } from './Svgs';

const sportIcons = {
  SOCCER: <FootballSvg color="var(--white)" height={22} width={22} />,
  TENNIS: <TennisSvg color="var(--white)" height={22} width={22} />,
  BASKETBALL: <BasketballSvg color="var(--white)" height={22} width={22} />,
  HOCKEY: <IceHockeySvg color="var(--white)" height={22} width={22} />,
  AMERICAN_FOOTBALL: <AmericanFootballSvg color="var(--white)" height={22} width={22} />,
  BASEBALL: <BaseballSvg color="var(--white)" height={22} width={22} />,
  HANDBALL: <HandBallSvg color="var(--white)" height={22} width={22} />,
  RUGBY_UNION: <RugbySvg color="var(--white)" height={22} width={22} />,
  FLOORBALL: <FrustalSvg color="var(--white)" height={22} width={22} />,
  BANDY: <FrustalSvg color="var(--white)" height={22} width={22} />, // Use appropriate icon
  FUTSAL: <FrustalSvg color="var(--white)" height={22} width={22} />,
  VOLLEYBALL: <VolleyBallSvg color="var(--white)" height={22} width={22} />,
  CRICKET: <CricketSvg color="var(--white)" height={22} width={22} />,
  DARTS: <FrustalSvg color="var(--white)" height={22} width={22} />, // Use appropriate icon
  SNOOKER: <FrustalSvg color="var(--white)" height={22} width={22} />, // Use appropriate icon
  BOXING: <BoxingSvg color="var(--white)" height={22} width={22} />,
  BEACH_VOLLEYBALL: <VolleyBallSvg color="var(--white)" height={22} width={22} />, // Use appropriate icon
  AUSSIE_RULES: <FootballSvg color="var(--white)" height={22} width={22} />, // Use appropriate icon
  RUGBY_LEAGUE: <RugbySvg color="var(--white)" height={22} width={22} />,
  BADMINTON: <FrustalSvg color="var(--white)" height={22} width={22} />, // Use appropriate icon
  WATER_POLO: <FrustalSvg color="var(--white)" height={22} width={22} />, // Use appropriate icon
  GOLF: <FrustalSvg color="var(--white)" height={22} width={22} />, // Use appropriate icon
  FIELD_HOCKEY: <IceHockeySvg color="var(--white)" height={22} width={22} />, // Use appropriate icon
  TABLE_TENNIS: <TableTennisSvg color="var(--white)" height={22} width={22} />,
  BEACH_SOCCER: <FootballSvg color="var(--white)" height={22} width={22} />, // Use appropriate icon
  MMA: <MmaSvg color="var(--white)" height={22} width={22} />,
  NETBALL: <FrustalSvg color="var(--white)" height={22} width={22} />, // Use appropriate icon
  PESAPALLO: <FrustalSvg color="var(--white)" height={22} width={22} />, // Use appropriate icon
  MOTORSPORT: <FrustalSvg color="var(--white)" height={22} width={22} />, // Use appropriate icon
  AUTORACING: <FrustalSvg color="var(--white)" height={22} width={22} />, // Use appropriate icon
  MOTORACING: <FrustalSvg color="var(--white)" height={22} width={22} />, // Use appropriate icon
  CYCLING: <FrustalSvg color="var(--white)" height={22} width={22} />, // Use appropriate icon
  HORSE_RACING: <FrustalSvg color="var(--white)" height={22} width={22} />, // Use appropriate icon
  ESPORTS: <DotaSvg color="var(--white)" height={22} width={22} />, // Use appropriate icon
  WINTER_SPORTS: <FrustalSvg color="var(--white)" height={22} width={22} />, // Use appropriate icon
  SKI_JUMPING: <FrustalSvg color="var(--white)" height={22} width={22} />, // Use appropriate icon
  ALPINE_SKIING: <FrustalSvg color="var(--white)" height={22} width={22} />, // Use appropriate icon
  CROSS_COUNTRY: <FrustalSvg color="var(--white)" height={22} width={22} />, // Use appropriate icon
  BIATHLON: <FrustalSvg color="var(--white)" height={22} width={22} />, // Use appropriate icon
  KABADDI: <FrustalSvg color="var(--white)" height={22} width={22} />, // Use appropriate icon
};

const LeftSideBar = () => {
  const [favorites, setFavorites] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_ULR;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    const fetchSports = async () => {
      const response = await fetch(`${apiUrl}/sports/list`, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': `${apiKey}`,
          'x-rapidapi-host': 'flashlive-sports.p.rapidapi.com'
        }
      });
      const data = await response.json();
      const favoritesData = data.DATA.map(sport => ({
        id: sport.ID,
        imgSrc: sportIcons[sport.NAME],
        text: sport.NAME.replace('_', ' '), // Format name for display
        url: `/game/${sport.NAME.toLowerCase().replace('_', '-')}`
      }));
      setFavorites(favoritesData);
    };

    fetchSports();
  }, []);

  return (
    <div className='lsb-bodys'>
      <div className='lsb-body'>

        {/* search form */}
        <div className='lsb-search'>
          <form action='' method=''>
            <input type='text' placeholder='Search.....' />
          </form>
        </div>

        <div className='lsb-heads'>
          <div className='lsb-head'>
            <span className='lsbh-home'>
              <Image
                src="/assets/homeIcon.png"
                alt="des"
                width={20}
                height={20}
              />
              <Link href="/" className='lshb-text' style={{ color: 'var(--purple-text)' }}>Home</Link>
            </span>
            <span className='lsbh-live'>
              <Image
                src="/assets/liveIcon.png"
                alt="des"
                width={20}
                height={20}
              />
              <Link href='livegames' className='lshb-text lsbhl-img'>Live</Link>
            </span>
            <span className='lsbh-favorite'>
              <Image
                src="/assets/solidStarwhiteIcon.png"
                alt="des"
                width={22}
                height={20}
              />
              <Link href="favourite" className='lshb-text'>Favorite</Link>
            </span>
          </div>
        </div>

        {/* games menu list */}
        <div className='lsb-games'>
          <div className='lsb-game'>
            <div className='lsbg-head'>
              <h2>Games</h2>
            </div>

            <div className='lsbh-game-list'>
              {favorites.map(({ id, imgSrc, text, url }) => (
                <span key={id} className='lsbh-each-game'>
                  {imgSrc}
                  <Link href={url+'?spid='+id} className='lshb-text'>{text}</Link>
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default LeftSideBar;
