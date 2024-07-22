import Image from "next/image"
import './css/livesporttype.css'
import OddOutcome from "./OddOutcome"


const LiveSportType = ({ leagueName, leagueTypeOfJson }) => {


    return (
        <div className="hkik-oddlines">
            <div className="hkik-oddline">

                <div className="hkik-oddline-body">
                    {
                        leagueTypeOfJson.map((list, index) => {
                            return (
                                <div key={index} className="hkik-oddline-each">
                                    <div className="hkik-oddline-eheads">
                                        <div className="hkik-oddline-ehead">
                                            <div className="hkik-ol-eheadl">
                                                <Image
                                                    src="/assets/ufeaIcon.png"
                                                    alt="des"
                                                    width={17}
                                                    height={17}
                                                />
                                                <p>{leagueName}</p>
                                                <Image
                                                    src="/assets/fireIcon.png"
                                                    alt="des"
                                                    width={14}
                                                    height={15}
                                                />
                                            </div>
                                            <div className="hkik-ol-eheadr">
                                                <span>Quarter 3 '18</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hkik-oddline-econts">
                                        <div className="hkik-oddline-econt">
                                            <div className="hkik-oddline-econt-lefts">
                                                <div className="hkik-oddline-econt-left">
                                                    <div className="hkik-oddecontl-team">
                                                        <span className="hkoddete-one">
                                                            <Image
                                                                src="/assets/tasmania.png"
                                                                alt="des"
                                                                width={26}
                                                                height={26}
                                                            />
                                                            <p>Melbourne Phoenix</p>

                                                        </span>
                                                        <span>
                                                            <Image
                                                                src="/assets/phonix.png"
                                                                alt="des"
                                                                width={26}
                                                                height={26}
                                                            /> <p>Tasmania Jackjumpers</p>
                                                        </span>
                                                    </div>

                                                    <div className="hkik-oddecont1-odd">
                                                        <div><span>42</span><p>Q1</p> <p>Q2</p><p>Q3</p></div>
                                                        <div><span></span><p>22</p> <p>16</p><p>15</p></div>
                                                        <div><span>53</span><p>17</p> <p>30</p><p>6</p></div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="hkik-oddline-econt-rights">
                                                <div className="hkik-oddline-econt-right">
                                                    <OddOutcome gap={20} draw={3.99} home={1.21} away={3.50} />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default LiveSportType