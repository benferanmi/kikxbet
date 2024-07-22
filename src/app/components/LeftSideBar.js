
import Image from 'next/image'
import './css/leftsidebar.css'
import Link from 'next/link'
import { AmericanFootballSvg, ArenaOfValorSvg, BaseballSvg, BasketballSvg, BoxingSvg, CricketSvg, CsgoSvg, DotaSvg, EHockey, EtennisSvg, FootballSvg, FrustalSvg, HandBallSvg, IceHockeySvg, MmaSvg, OwSvg, RainbowSvg, RocketLeagueSvg, RugbySvg, Sc2Svg, StarSvg, TableTennisSvg, TennisSvg, VolleyBallSvg } from './Svgs';

const LeftSideBar = () => {

  const favorites = [
    { id: 1, imgSrc: <FootballSvg color="#ffffff" height={22} width={22} />, text: "eFootball", url: "favourite" },
    { id: 2, imgSrc: <CsgoSvg color="#ffffff" height={22} width={22} />, text: "CS:GO", url: "/cs-go" },
    { id: 3, imgSrc: <BasketballSvg color="#ffffff" height={22} width={22} />, text: "BasketBall", url: "/basketball" },
    { id: 4, imgSrc: <BasketballSvg color="#ffffff" height={22} width={22} />, text: "eBasketball", url: "/ebasketball" },
    { id: 5, imgSrc: <TennisSvg color="#ffffff" height={22} width={22} />, text: "Tennis", url: "/tennis" },
    { id: 6, imgSrc: <EtennisSvg color="#ffffff" height={22} width={22} />, text: "eTennis", url: "/etennis" },
    { id: 7, imgSrc: <DotaSvg color="#ffffff" height={22} width={22} />, text: "Dota 2", url: "/dota" },
    { id: 8, imgSrc: <StarSvg color="#ffffff" height={22} width={22} />, text: "LOL", url: "/lol" },
    { id: 9, imgSrc: <IceHockeySvg color="#ffffff" height={22} width={22} />, text: "Ice hockey", url: "/ice-hockey" },
    { id: 10, imgSrc: <EHockey color="#ffffff" height={22} width={22} />, text: "eHockey", url: "/ehockey" },

    { id: 11, imgSrc: <TableTennisSvg color="#ffffff" height={22} width={22} />, text: "Table Tennis", url: "/table-tennis" },
    { id: 12, imgSrc: <VolleyBallSvg color="#ffffff" height={22} width={22} />, text: "Volleyball", url: "/volleyball" },
    { id: 13, imgSrc: <BaseballSvg color="#ffffff" height={22} width={22} />, text: "Baseball", url: "/baseball" },
    { id: 14, imgSrc: <RugbySvg color="#ffffff" height={22} width={22} />, text: "Rugby", url: "/rugby" },
    { id: 15, imgSrc: <MmaSvg color="#ffffff" height={22} width={22} />, text: "MMA", url: "/mma" },
    { id: 16, imgSrc: <AmericanFootballSvg color="#ffffff" height={22} width={22} />, text: "American Football", url: "/americanfootball" },
    { id: 17, imgSrc: <HandBallSvg color="#ffffff" height={22} width={22} />, text: "Handball", url: "/handball" },
    { id: 18, imgSrc: <RocketLeagueSvg color="#ffffff" height={22} width={22} />, text: "Rocket League", url: "/rocketleague" },
    { id: 19, imgSrc: <BoxingSvg color="#ffffff" height={22} width={22} />, text: "Boxing", url: "/boxing" },
    { id: 20, imgSrc: <RainbowSvg color="#ffffff" height={22} width={22} />, text: "Rainbow 6", url: "/rainbow" },
    { id: 21, imgSrc: <FrustalSvg color="#ffffff" height={22} width={22} />, text: "Futsal", url: "/futsal" },
    { id: 22, imgSrc: <CricketSvg color="#ffffff" height={22} width={22} />, text: "Cricket", url: "/cricket" },
    { id: 23, imgSrc: <Sc2Svg color="#ffffff" height={22} width={22} />, text: "SC 2", url: "/sc" },
    { id: 24, imgSrc: <OwSvg color="#ffffff" height={22} width={22} />, text: "OW", url: "/ow" },
    { id: 25, imgSrc: <ArenaOfValorSvg color="#ffffff" height={22} width={22} />, text: "Arena Of Valor", url: "/arenaofvalor" },
  ];


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
              <Link href='live-games' className='lshb-text lsbhl-img'>Live</Link>
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
  )
}

export default LeftSideBar