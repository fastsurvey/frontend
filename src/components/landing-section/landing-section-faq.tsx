import React from 'react';

const faqs = [
    {
        question: 'Where can I add payment information?',
        answer: 'Right now, our tool is still completely free to use. We want to see how people use it and implement important features before spending time on implementing payment logic.',
    },
    {
        question: 'When it is currently free, how do you make money?',
        answer: 'We do not have any investors and pay for the servers ourselves.',
    },
    {
        question: 'Will prices be increased in the future?',
        answer: 'Definitely not! We will never limit an existing feature to any premium plan. If we change anything about the prices we will only decrease them either for everyone, or for surveys/accounts with a many submissions.',
    },
    {
        question: 'What features are planned in the future?',
        answer: 'We have a lot of exciting stuff planned. In September/October 2021 we will release a public roadmap, where you can see all of our ideas, comment on them and vote for your favorite.',
    },
    {
        question: 'Why is your free plan so generous?',
        answer: 'In our opinion, it is not great behavior to make users pay for something before they had time to extensively test it. Limiting features to expensive plans or having a very tiny "trial"-version are exactly the things we strongly oppose.',
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
                                <dt className='text-base leading-6 text-white font-weight-600'>
                                    {faq.question}
                                </dt>
                                <dd className='mt-2 text-sm text-gray-200 font-weight-400'>
                                    {faq.answer}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className='-m-4 p-4 mt-12 border-[2px] border-dashed border-gray-700 rounded-lg w-[calc(100%+2rem)]'>
                    <h3 className='text-base leading-6 text-white font-weight-600'>
                        Any further questions? Something is not working? Missing
                        an important feature?
                    </h3>
                    <div className='mt-2 text-sm text-gray-200 font-weight-400'>
                        Please drop us a line under{' '}
                        <a
                            href='mailto:info@fastsurvey.de'
                            target='blank'
                            rel='noopener noreferrer'
                            className='text-blue-100 underline font-weight-600'
                        >
                            info@fastsurvey.de
                        </a>
                        . We will help you and possibly fix any bugs as quickly
                        as we can!
                    </div>
                </div>
            </div>
        </div>
    );
}
