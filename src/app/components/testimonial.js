
import Image from 'next/image';
import './css/testimonial.css';

export default function Testimonial() {
    return (
        <section className="testimonials">
            <div className="testimonial">
                <div className="testimonial-body">
                    <h2>Testimonials</h2>
                    <p>Feedback from satisfied clients highlighting the positive impact of our services.</p>


                    <div className="testimonial-prove">
                        <div className="testimonial-grid">
                            <div className="testimonial-each">
                                <span>
                                    <Image
                                        src="/assets/test1.png"
                                        alt="des"
                                        width={70}
                                        height={70}
                                    />
                                    <div className="testimonial-rating">
                                        <Image
                                            src="/assets/star.png"
                                            alt="des"
                                            width={15}
                                            height={15}
                                        />
                                        <p>4.7</p>
                                    </div>

                                    <div className="testimonial-username">@andylaw</div>

                                    <h3>John D</h3>

                                    <div className="testimonial-des">I&quot;ve been playing at this casino for months now, and it&quot;s fantastic! The games are exciting, the payouts are quick, and the customer service!</div>

                                    <div className="testimonial-location">
                                        <Image
                                            src="/assets/locationIcon.png"
                                            alt="des"
                                            width={11}
                                            height={14}
                                        />
                                        <p>New york, USA</p>
                                    </div>
                                </span>

                            </div>

                            <div className="testimonial-each">
                                <span>
                                    <Image
                                        src="/assets/test2.png"
                                        alt="des"
                                        width={70}
                                        height={70}
                                    />
                                    <div className="testimonial-rating">
                                        <Image
                                            src="/assets/star.png"
                                            alt="des"
                                            width={15}
                                            height={15}
                                        />
                                        <p>4.7</p>
                                    </div>

                                    <div className="testimonial-username">@andylaw</div>

                                    <h3>Sarah M</h3>

                                    <div className="testimonial-des">This casino is the best! The variety of games is amazing, and I love the bonuses and promotions. It&quot;s my go-to place for online gaming.</div>

                                    <div className="testimonial-location">
                                        <Image
                                            src="/assets/locationIcon.png"
                                            alt="des"
                                            width={11}
                                            height={14}
                                        />
                                        <p>New york, USA</p>
                                    </div>
                                </span>

                            </div>

                            <div className="testimonial-each">
                                <span>
                                    <Image
                                        src="/assets/test3.png"
                                        alt="des"
                                        width={70}
                                        height={70}
                                    />
                                    <div className="testimonial-rating">
                                        <Image
                                            src="/assets/star.png"
                                            alt="des"
                                            width={15}
                                            height={15}
                                        />
                                        <p>4.7</p>
                                    </div>

                                    <div className="testimonial-username">@andylaw</div>

                                    <h3>Mike L</h3>

                                    <div className="testimonial-des">I was skeptical at first, but this casino has exceeded my expectations. The user interface is easy to navigate, and I&quot;ve had great luck with my winnings.</div>

                                    <div className="testimonial-location">
                                        <Image
                                            src="/assets/locationIcon.png"
                                            alt="des"
                                            width={11}
                                            height={14}
                                        />
                                        <p>New york, USA</p>
                                    </div>
                                </span>

                            </div>
                        </div>
                    </div>

                    <div className="testimonial-dots">
                        <div className="testimonial-dot">
                            <span className="shjdshu343"></span>
                            <span className="shjdshu766"></span>
                            <span className="shjdshu343"></span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};