
import './css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <footer>
                <section className='fots'>
                    <div className='fot'>
                        <div className='fot-content'>
                            <div className='fotc-left'>
                                <div className='fotcl'>
                                    <h2>Casino Bet</h2>
                                    <p>The main benefits from us are streamlined services.</p>

                                    <div className='fotcl-social'>
                                        <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </a>
                                        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faLinkedin} />
                                        </a>
                                    </div>
                                </div>

                            </div>

                            <div className='fotc-right'>
                                <div className='fotc-menu' >
                                    <Link href="/affliate">
                                        Affiliate <br />program
                                    </Link>

                                    <Link href="/terms">
                                        Terms <br /> &conditions
                                    </Link>
                                    <Link href="/bonus">
                                        Bonus terms &<br />
                                        conditions
                                    </Link>
                                </div>

                            </div>


                            <div className='copyright'>
                                <p>Copyright © 2025 play for wealth. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    );
};
