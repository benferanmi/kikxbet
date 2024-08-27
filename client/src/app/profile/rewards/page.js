
import Image from 'next/image';
import ProfileLayout from '../ProfileLayout';
import './rewards.css';

const page = () => {
    return (
        <ProfileLayout>
            <div className='profile_rewards'>
                <div className='profile_rewards_heads'>
                    <div className='prhd_image'>
                        <Image
                            src='/assets/aboutone.png'
                            alt=''
                            height={62}
                            width={62}
                        />
                    </div>

                    <div className='prhd_cont'>
                        <h3>Level</h3>
                        <span style={{
                            display: 'block', height: '2px',
                            background: 'linear-gradient(88.89deg, #AAFF00 0%, #FFAA1D 100%)'
                        }}></span>
                        <p>EB3585 remaining to your next tiger</p>
                    </div>

                </div>


                <div className='profile_rewards_historys'>
                    <div className='profile_rewards_history'>
                        
                    </div>
                </div>
            </div>
        </ProfileLayout>
    );
};

export default page;