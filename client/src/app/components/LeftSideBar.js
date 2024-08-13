'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './css/leftsidebar.css';
import Link from 'next/link';
import { AlpineSkiingIcon, AmericanFootballSvg, AussieRulesIcon, AutoRacingIcon, BadmintonSvg, BandySvg, BaseballSvg, BasketballSvg, BeachSoccerSvg, BeachVolleyBallSvg, BiathlonSvg, BoxingSvg, CricketSvg, CrosscountryIcon, CyclingSvg, DartsSvg, EsportIcon, FieldHockeySvg, FootballSvg, FrustalSvg, GolfSvg, HandBallSvg, HorseRacingSvg, IceHockeySvg, MmaSvg, MotorSportIcon, NetballSvg, PesapalloIcon, RugbySvg, SkiJumpingSvg, SnookerSvg, TableTennisSvg, TennisSvg, VolleyBallSvg, WaterPoloIicon, WintersportIcon } from './Svgs';

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
  BANDY: <BandySvg color="var(--white)" height={22} width={22} />,
  FUTSAL: <FrustalSvg color="var(--white)" height={22} width={22} />,
  VOLLEYBALL: <VolleyBallSvg color="var(--white)" height={22} width={22} />,
  CRICKET: <CricketSvg color="var(--white)" height={22} width={22} />,
  DARTS: <DartsSvg color="var(--white)" height={22} width={22} />,
  SNOOKER: <SnookerSvg color="var(--white)" height={22} width={22} />,
  BOXING: <BoxingSvg color="var(--white)" height={22} width={22} />,
  BEACH_VOLLEYBALL: <BeachVolleyBallSvg color="var(--white)" height={22} width={22} />,
  AUSSIE_RULES: <AussieRulesIcon color="var(--white)" height={22} width={22} />,
  RUGBY_LEAGUE: <RugbySvg color="var(--white)" height={22} width={22} />,
  BADMINTON: <BadmintonSvg color="var(--white)" height={22} width={22} />,
  WATER_POLO: <WaterPoloIicon color="var(--white)" height={22} width={22} />,
  GOLF: <GolfSvg color="var(--white)" height={22} width={22} />,
  FIELD_HOCKEY: <FieldHockeySvg color="var(--white)" height={22} width={22} />,
  TABLE_TENNIS: <TableTennisSvg color="var(--white)" height={22} width={22} />,
  BEACH_SOCCER: <BeachSoccerSvg color="var(--white)" height={22} width={22} />,
  MMA: <MmaSvg color="var(--white)" height={22} width={22} />,
  NETBALL: <NetballSvg color="var(--white)" height={22} width={22} />,
  PESAPALLO: <PesapalloIcon color="var(--white)" height={22} width={22} />,
  MOTORSPORT: <MotorSportIcon color="var(--white)" height={22} width={22} />,
  AUTORACING: <AutoRacingIcon color="var(--white)" height={22} width={22} />,
  MOTORACING: <MotorSportIcon color="var(--white)" height={22} width={22} />,
  CYCLING: <CyclingSvg color="var(--white)" height={22} width={22} />,
  HORSE_RACING: <HorseRacingSvg color="var(--white)" height={22} width={22} />,
  ESPORTS: <EsportIcon color="var(--white)" height={22} width={22} />,
  WINTER_SPORTS: <WintersportIcon color="var(--white)" height={22} width={22} />,
  SKI_JUMPING: <SkiJumpingSvg color="var(--white)" height={22} width={22} />,
  ALPINE_SKIING: <AlpineSkiingIcon color="var(--white)" height={22} width={22} />,
  CROSS_COUNTRY: <CrosscountryIcon color="var(--white)" height={22} width={22} />,
  BIATHLON: <BiathlonSvg color="var(--white)" height={22} width={22} />,
  KABADDI: <FrustalSvg color="var(--white)" height={22} width={22} />,
};

const LeftSideBar = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchSports = async () => {
      const response = await fetch('https://flashlive-sports.p.rapidapi.com/v1/sports/list', {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '1b3901337fmsh67b51c6f90922b7p1edff4jsn6862c9feb385',
          'x-rapidapi-host': 'flashlive-sports.p.rapidapi.com'
        }
      });
      const data = await response.json();
      console.log(data);
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
