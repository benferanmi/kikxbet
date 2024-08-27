
import Image from 'next/image';
import './css/steptoplay.css';

export default function StepToPlay() {
  return (
    <section className="play-steps">
      <div className="play-step">
        <h2>Steps to play <span>Earn</span></h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt.</p>


        <div className="playstep-grid">
          <div className="playstep-each">
            <div className="psec" >
              <Image
                src="/assets/gambler.png"
                alt="des"
                width={85}
                height={85}
              />
              <h3>Register Today</h3>
              <p>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut .</p>
            </div>
          </div>
          <div className="playstep-each acpelty">
            <div className="psec" >
              <Image
                src="/assets/suitcase.png"
                alt="des"
                width={85}
                height={85}
              />
              <h3>Deposit Money</h3>
              <p>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut .</p>
            </div>
          </div>
          <div className="playstep-each ">
            <div className="psec" >
              <Image
                src="/assets/poker.png"
                alt="des"
                width={85}
                height={85}
              />
              <h3>Play Game</h3>
              <p>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut .</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};