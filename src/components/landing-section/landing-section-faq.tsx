import React from 'react';

const faqs = [
    {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
];

export default function LandingSectionFAQ() {
    return (
        <div className='py-16 bg-gray-900 border-b-[2px] last:border-b-0 border-gray-700 w-full'>
            <div className='mx-auto lg:max-w-[66rem] xl:max-w-[67rem] flex-col-center'>
                <h2 className='text-xl text-blue-100 uppercase'>
                    Frequently asked <strong>questions</strong>
                </h2>
                <div className='mt-12'>
                    <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3'>
                        {faqs.map((faq, index) => (
                            <div key={index}>
                                <dt className='text-lg font-medium leading-6 text-gray-100'>
                                    {faq.question}
                                </dt>
                                <dd className='mt-2 text-base text-gray-300'>
                                    {faq.answer}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
