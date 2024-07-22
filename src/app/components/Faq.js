
"use client"

import Image from 'next/image';
import { useState } from 'react';
import './css/faq.css'

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        {
            question: "How fast do I get paid once I win a bet?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut."
        },
        {
            question: "I want to play at Bitbetio, What do i need to do?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut."
        },
        {
            question: "What are the commissions I have to pay?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut."
        },
        {
            question: "Can I set the odds for any bet I want?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut."
        },
        {
            question: "What kind of Escrow do you provide?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut."
        },
        {
            question: "What makes us unique?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut."
        },
        {
            question: "Is the Escrow payment secured?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut."
        },
        {
            question: "How do I deposit/transfer money to my transactions?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut."
        },
        {
            question: "How do I deposit/transfer money to my transactions?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut."
        }
    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>

            <section className="faqs" >
                <div className="faq">
                    <div className="faq-hero">
                        <span>Frequently Asked Questions</span>
                        <h2>If you have questions we have answer</h2>
                        <p>Answers for our most popular questions about sportsbetting, crypto, and bitbetio</p>
                    </div>

                    <div className="faq-bodys">
                        <div className='faq-body'>
                            {questions.map((item, index) => (
                                <div key={index}>
                                    <div className='faq-question'>
                                        <span>
                                            <Image
                                                src="/assets/question.png"
                                                alt="des"
                                                width={20}
                                                height={20}
                                            />
                                            <h3 >
                                                {item.question}
                                            </h3>
                                        </span>
                                        <Image
                                            src="/assets/plus.png"
                                            alt="des"
                                            width={20}
                                            height={20}
                                            onClick={() => handleToggle(index)} style={{ cursor: 'pointer' }}
                                        />
                                    </div>

                                    {activeIndex === index && <p className='faq-answer'>{item.answer}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Faq;
