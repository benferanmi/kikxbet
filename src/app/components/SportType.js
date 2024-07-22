import Image from "next/image"
import './css/sporttype.css'
import OddOutcome from "./odd/OddOutcome"


const SportType = ({ leagueName, leagueTypeOfJson }) => {


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
                                                <span>Oct 21 00:45</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hkik-oddline-econts">
                                        <div className="hkik-oddline-econt">
                                            <div className="hkik-oddline-econt-lefts">
                                                <div className="hkik-oddline-econt-left">
                                                    <span>
                                                        <p>scotland</p>
                                                        <Image
                                                            src="/assets/scotland.png"
                                                            alt="des"
                                                            width={38}
                                                            height={38}
                                                        />
                                                    </span>
                                                    <strong>VS</strong>
                                                    <span>
                                                        <Image
                                                            src="/assets/wales.png"
                                                            alt="des"
                                                            width={38}
                                                            height={38}
                                                        /> <p>wales</p>
                                                    </span>
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

export default SportType