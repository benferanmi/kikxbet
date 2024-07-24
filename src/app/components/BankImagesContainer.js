
import Image from 'next/image';
import './css/bankimagescontainer.css';

const BankImagesContainer = () => {
    return (
        <div>
            <div className="bankIcons">
                <div className="bankIcon">
                    <div className="bankIconImg" >
                        <Image
                            src="/assets/visa.png"
                            alt="des"
                            width={62}
                            height={20}
                        />

                        <Image
                            src="/assets/mastercard.png"
                            alt="des"
                            width={39}
                            height={31}
                        />

                        <Image
                            src="/assets/skrill.png"
                            alt="des"
                            width={62}
                            height={22}
                        />

                        <Image
                            src="/assets/maestro.png"
                            alt="des"
                            width={50}
                            height={31}
                        />

                        <Image
                            src="/assets/paysafe.png"
                            alt="des"
                            width={62}
                            height={11}
                        />

                        <Image
                            src="/assets/webmoney.png"
                            alt="des"
                            width={62}
                            height={16}
                        />

                        <Image
                            src="/assets/net.png"
                            alt="des"
                            width={62}
                            height={11}
                        /><Image
                            src="/assets/debit.png"
                            alt="des"
                            width={62}
                            height={29}
                        /><Image
                            src="/assets/netent.png"
                            alt="des"
                            width={62}
                            height={16}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BankImagesContainer;