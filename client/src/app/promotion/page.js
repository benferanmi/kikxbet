
import Header from '../components/Header';
import './promotion.css';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';
import Faq from '../components/Faq';
import StepToPlay from '../components/StepsToPlay';
import Testimonial from '../components/testimonial';

export default function PromotionPage() {

  const tradingHeader = ['Metric', 'bitfunded Challenge', 'bitfunded Challenge', 'bitfunded Account'];
  const tradingRows = [
    ['Time limits', '45 Days', '60 Days', '-'],
    [' Minimum Trading Days', '5 Days ', ' 5 Days', ' -'],
    [' Profit Target', ' 12% ', ' 6%', ' 12%'],
    [' Daily Drawdown', ' 5%', '5% ', ' 5%'],
    [' Maximum Loss', ' 12%', ' 12%', '12% '],
    ['Refundable Fee ', ' Challenge Fee', ' Free', ' Refund'],
  ];

  return (
    <>
      <Header />

      <section className="hero-sections">
        <div className="hero-section">
          <div className="hero-content">
            <h1>Elevate Your Sports Betting Game</h1>

            <p>Welcome to KIKXBET, where passion meets profitability in sports betting. Our platform offers tailored challenges to identify and nurture top betting talents, providing the opportunity to bet with real money and share in the profits.</p>

            <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
              <Link className="hero-button" href='/promotion' style={{ cursor: 'pointer' }}><span>Registration Now</span></Link>
            </div>
          </div>
        </div>
      </section>

      <StepToPlay />

      {/* our challenges */}
      <section className="challenges">
        <div className="challange">
          <div className="challange-head">
            <h2>Our Challenges</h2>
            <p>choose our favorite account size and type passing to your individual trading style</p>
          </div>


          <div className="challange-subs">
            <div className="challange-sub">
              <div className="challange-subgrid">
                <div className="challange-subeach">
                  <div className="cseach">
                    <Image
                      src="/assets/workericon3.png"
                      alt="des"
                      width={335}
                      height={335}
                      style={{ width: '100%' }}
                    />
                    <h4>Challenge 10K</h4>
                    <p>€149,00 EUR</p>
                  </div>
                </div>

                <div className="challange-subeach">
                  <div className="cseach">
                    <Image
                      src="/assets/workericon6.png"
                      alt="des"
                      width={380}
                      height={335}
                      style={{ width: '100%' }}
                    />
                    <h4>Challenge 25K</h4>
                    <p>€245,00 EUR</p>
                  </div>
                </div>

                <div className="challange-subeach">
                  <div className="cseach">
                    <Image
                      src="/assets/workericon4.png"
                      alt="des"
                      width={335}
                      height={335}
                      style={{ width: '100%' }}
                    />
                    <h4>Challenge 50K</h4>
                    <p>€375,00 EUR</p>
                  </div>
                </div>
              </div>

              <div className="challange-subgrid">
                <div className="challange-subeach">
                  <div className="cseach">
                    <Image
                      src="/assets/workericon3.png"
                      alt="des"
                      width={335}
                      height={335}
                      style={{ width: '100%' }}
                    />
                    <h4>Challenge 100K</h4>
                    <p>€525,00 EUR</p>
                  </div>
                </div>

                <div className="challange-subeach">
                  <div className="cseach">
                    <Image
                      src="/assets/workericon4.png"
                      alt="des"
                      width={380}
                      height={335}
                      style={{ width: '100%' }}
                    />
                    <h4>Challenge 200K</h4>
                    <p>€990,00 EUR</p>
                  </div>
                </div>

                <div className="challange-subeach">
                  <div className="cseach">
                    <Image
                      src="/assets/workericon5.png"
                      alt="des"
                      width={335}
                      height={335}
                      style={{ width: '100%' }}
                    />
                    <h4>Challenge 500K</h4>
                    <p>€2,375,00 EUR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* step by step section? */}

      <section className="step-bys">
        <div className="step-by">
          <div className="step-byhead">
            <p>Step by Step</p>
            <h2>Easy Steps for Affliate Marketing</h2>
          </div>

          <div className="stepby-list">
            <div className="stepby-grid">
              <div className="sbyg-each">
                <div className="sbyg-content">
                  <div className="sbyg-icon">
                    <div className="sybg-one sybg-blue">
                      <Image
                        src="/assets/profileIcon.png"
                        alt="des"
                        width={25}
                        height={21}
                      />
                      <span className="arrowUpLongDotted">
                        <Image
                          src="/assets/arrowUpLongDotted.png"
                          alt="des"
                          width={145}
                          height={30}
                        />
                      </span>

                    </div>
                  </div>

                  <div className="sbyg-cont">
                    <h3>Register Now</h3>
                    <p>Now for your Free Resource Page - No credit card required</p>
                  </div>
                </div>
              </div>

              <div className="sbyg-each">
                <div className="sbyg-content">
                  <div className="sbyg-icon">
                    <div className="sybg-one sybg-lime ">
                      <Image
                        src="/assets/profileIcon.png"
                        alt="des"
                        width={25}
                        height={21}
                      />
                      <span className="arrowDownLongDotted">
                        <Image
                          src="/assets/arrowDownLongDotted.png"
                          alt="des"
                          width={145}
                          height={30}
                        />
                      </span>

                    </div>
                  </div>

                  <div className="sbyg-cont">
                    <h3>Register Now</h3>
                    <p>Easily create your page with the help of our team of experts on anything that you’re passionate about, its as easy as filling out a form.</p>
                  </div>
                </div>
              </div>

              <div className="sbyg-each">
                <div className="sbyg-content">
                  <div className="sbyg-icon">
                    <div className="sybg-one sybg-pink">
                      <Image
                        src="/assets/profileIcon.png"
                        alt="des"
                        width={25}
                        height={21}
                      />
                      <span className="arrowUpLongDotted">
                        <Image
                          src="/assets/arrowUpLongDotted.png"
                          alt="des"
                          width={145}
                          height={30}
                        />
                      </span>

                    </div>
                  </div>

                  <div className="sbyg-cont">
                    <h3>Insert Affiliate ads</h3>
                    <p>Our team will guide you step by step along the way on how to find and get top performing affiliate partners to maximize your earnings.</p>
                  </div>
                </div>
              </div>

              <div className="sbyg-each">
                <div className="sbyg-content">
                  <div className="sbyg-icon">
                    <div className="sybg-one sybg-orange">
                      <Image
                        src="/assets/profileIcon.png"
                        alt="des"
                        width={25}
                        height={21}
                      />
                      <span className="arrowDownLongDotted">
                        <Image
                          src="/assets/arrowDownLongDotted.png"
                          alt="des"
                          width={145}
                          height={30}
                        />
                      </span>

                    </div>
                  </div>

                  <div className="sbyg-cont">
                    <h3>Promote</h3>
                    <p>We show you easy and cost effective ways that will drive targeted traffic to your high converting web page so you can start earning on day one!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* what we offer/opportunity */}

      <section className="offers">
        <div className="offer">
          <div className="offer-cont">
            <div className="offer-image">
              <Image
                src="/assets/offers.png"
                alt="des"
                width={390}
                height={600}
              />
            </div>

            <div className="offer-body">
              <div className="offer-content">
                <p>Here is what we offer!</p>
                <h2>We have a Best Opportunities for you.</h2>


                <div className="offer-list">
                  <div className="offer-each">
                    <Image
                      src="/assets/offerLike.png"
                      alt="des"
                      width={48}
                      height={48}
                    />
                    <p>Free affiliate marketing training</p>
                  </div>
                  <div className="offer-each">
                    <Image
                      src="/assets/offerLike.png"
                      alt="des"
                      width={48}
                      height={48}
                    />
                    <p>A dedicated account manager</p>
                  </div>
                  <div className="offer-each">
                    <Image
                      src="/assets/offerLike.png"
                      alt="des"
                      width={48}
                      height={48}
                    />
                    <p>Unlimited casino bet as you want</p>
                  </div>
                  <div className="offer-each">
                    <Image
                      src="/assets/offerLike.png"
                      alt="des"
                      width={48}
                      height={48}
                    />
                    <p>Ideas for unique bets  and win</p>
                  </div>
                </div>

                <div className="offer-button">
                  <Link href='/opportunity'>See opportunities
                    <Image
                      src="/assets/arrowStroke.png"
                      alt="des"
                      width={14}
                      height={10}
                    /></Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* objective section */}

      <section>
        <div className="trading-objs">
          <div className="trading-obj">
            <div className="trading-obj-body">
              <h2>Trading Objectives</h2>
              <p>We have a high expectations to gives you the good wealth</p>
              <div className="trading-obj-table">
                <table style={styles.table}>
                  <thead>
                    <tr>
                      {tradingHeader.map((header, index) => (
                        <th key={index} style={styles.tradingObjheader}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tradingRows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} style={styles.tradingobjcell}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>


        <div className="trading-objs">
          <div className="trading-obj">
            <div className=" trading-obj-body">
              <h2>Crypto Objectives</h2>
              <p>Maximize returns through strategic crypto investments.</p>


              <div className="trading-obj-table">
                <div className="crypto-obj-content">
                  <div className="crypto-obj-grid">
                    <div className="cryobj-each">
                      <h3>Spot Trading</h3>
                      <p>On our platform we offer you the
                        possibility to trade crypto in spot with up
                        to 20x leverage.</p>
                    </div>
                    <div className="cryobj-each">
                      <h3>Comissions</h3>
                      <p>Our commissions rules are different due
                        national requirements in range between
                        0.0% and 0.1% per trade.</p>
                    </div>
                    <div className="cryobj-each">
                      <h3>Tier 1 Price Data</h3>
                      <p>We offer the fastest trading system
                        the price data to the optimal conditions
                        Tier 1 exchanges.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* payout system section */}

      <section className="payout-systems">
        <div className="payout-system">
          <div className="payout-system-body">
            <div className="payout-system-content">
              <span>
                <h2>Payout System</h2>
                <br />
                <br />

                <p>A Payout System is a method or platform used to distribute payments to individuals or businesses.</p>
                <br />

                <p>It ensures that payments are made accurately and on time, handling various forms of transactions such as direct deposits, wire transfers, checks, or digital wallets.</p>
              </span>
            </div>

            <div className="payout-system-image">
              <Image
                src="/assets/payoutImage.png"
                alt="des"
                width={335}
                height={520}
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>


      {/* testimonial section */}
      <Testimonial />


      {/* faqs section */}

      <Faq />


      <Footer />
    </>
  );
};

const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: 'var(--side-bar-back)',
  },
  tradingObjheader: {
    padding: '14px 8px',
    border: '1px solid #FFFFFF66',
    fontFamily: 'Assistant',
    fontSize: '16.5px',
    fontWeight: 700,
    lineHeight: '29.7px',
    letterSpacing: '0.6187927722930908px',
  },
  tradingobjcell: {
    padding: ' 16px 8px',
    border: '1px solid #FFFFFF66',
    fontFamily: 'Assistant',
    fontSize: '16.5px',
    fontWeight: 400,
    lineHeight: '29.7px',
    letterSpacing: '0.6187927722930908px',
  },
};
