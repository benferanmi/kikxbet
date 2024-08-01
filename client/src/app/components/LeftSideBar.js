
import Image from 'next/image';
import './css/leftsidebar.css';
import Link from 'next/link';
import { AmericanFootballSvg, ArenaOfValorSvg, BaseballSvg, BasketballSvg, BoxingSvg, CricketSvg, CsgoSvg, DotaSvg, EHockey, EtennisSvg, FootballSvg, FrustalSvg, HandBallSvg, IceHockeySvg, MmaSvg, OwSvg, RainbowSvg, RocketLeagueSvg, RugbySvg, Sc2Svg, StarSvg, TableTennisSvg, TennisSvg, VolleyBallSvg } from './Svgs';

const LeftSideBar = () => {

  const favorites = [
    { id: 1, imgSrc: <FootballSvg color="var(--white)" height={22} width={22} />, text: 'eFootball', url: '/game/efootball' },
    { id: 2, imgSrc: <CsgoSvg color="var(--white)" height={22} width={22} />, text: 'CS:GO', url: '/game/cs-go' },
    { id: 3, imgSrc: <BasketballSvg color="var(--white)" height={22} width={22} />, text: 'BasketBall', url: '/game/basketball' },
    { id: 4, imgSrc: <BasketballSvg color="var(--white)" height={22} width={22} />, text: 'eBasketball', url: '/game/ebasketball' },
    { id: 5, imgSrc: <TennisSvg color="var(--white)" height={22} width={22} />, text: 'Tennis', url: '/game/tennis' },
    { id: 6, imgSrc: <EtennisSvg color="var(--white)" height={22} width={22} />, text: 'eTennis', url: '/game/etennis' },
    { id: 7, imgSrc: <DotaSvg color="var(--white)" height={22} width={22} />, text: 'Dota 2', url: '/game/dota' },
    { id: 8, imgSrc: <StarSvg color="var(--white)" height={22} width={22} />, text: 'LOL', url: '/game/lol' },
    { id: 9, imgSrc: <IceHockeySvg color="var(--white)" height={22} width={22} />, text: 'Ice hockey', url: '/game/ice-hockey' },
    { id: 10, imgSrc: <EHockey color="var(--white)" height={22} width={22} />, text: 'eHockey', url: '/game/ehockey' },

    { id: 11, imgSrc: <TableTennisSvg color="var(--white)" height={22} width={22} />, text: 'Table Tennis', url: '/game/table-tennis' },
    { id: 12, imgSrc: <VolleyBallSvg color="var(--white)" height={22} width={22} />, text: 'Volleyball', url: '/game/volleyball' },
    { id: 13, imgSrc: <BaseballSvg color="var(--white)" height={22} width={22} />, text: 'Baseball', url: '/game/baseball' },
    { id: 14, imgSrc: <RugbySvg color="var(--white)" height={22} width={22} />, text: 'Rugby', url: '/game/rugby' },
    { id: 15, imgSrc: <MmaSvg color="var(--white)" height={22} width={22} />, text: 'MMA', url: '/game/mma' },
    { id: 16, imgSrc: <AmericanFootballSvg color="var(--white)" height={22} width={22} />, text: 'American Football', url: '/game/americanfootball' },
    { id: 17, imgSrc: <HandBallSvg color="var(--white)" height={22} width={22} />, text: 'Handball', url: '/game/handball' },
    { id: 18, imgSrc: <RocketLeagueSvg color="var(--white)" height={22} width={22} />, text: 'Rocket League', url: '/game/rocketleague' },
    { id: 19, imgSrc: <BoxingSvg color="var(--white)" height={22} width={22} />, text: 'Boxing', url: '/game/boxing' },
    { id: 20, imgSrc: <RainbowSvg color="var(--white)" height={22} width={22} />, text: 'Rainbow 6', url: '/game/rainbow' },
    { id: 21, imgSrc: <FrustalSvg color="var(--white)" height={22} width={22} />, text: 'Futsal', url: '/game/futsal' },
    { id: 22, imgSrc: <CricketSvg color="var(--white)" height={22} width={22} />, text: 'Cricket', url: '/game/cricket' },
    { id: 23, imgSrc: <Sc2Svg color="var(--white)" height={22} width={22} />, text: 'SC 2', url: '/game/sc' },
    { id: 24, imgSrc: <OwSvg color="var(--white)" height={22} width={22} />, text: 'OW', url: '/game/ow' },
    { id: 25, imgSrc: <ArenaOfValorSvg color="var(--white)" height={22} width={22} />, text: 'Arena Of Valor', url: '/game/arenaofvalor' },];


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
                  <Link href={url} className='lshb-text'>{text}</Link>
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