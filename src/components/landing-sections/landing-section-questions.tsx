import {props} from 'cypress/types/bluebird';
import React from 'react';
import {NewLandingPageSection} from './section';

const faqs = [
    {
        question: 'Where can I find my surveys?',
        answer: (
            <>
                You can manage all of your surveys on{' '}
                <a
                    href='https://console.fastsurvey.de/'
                    target='_blank'
                    className='px-1 py-0.5 -my-0.5 rounded ringable font-weight-600 text-blue-100 underline'
                >
                    console.fastsurvey.de
                </a>
                - The survey itself can be found on{' '}
                <a className='underline break-all cursor-not-allowed'>
                    fastsurvey.de/{'<your-username>/<survey-identifier>'}
                </a>{' '}
                (the link to be shared with your respondents).
            </>
        ),
    },
    {
        question: 'Where can I add payment information?',
        answer: 'Right now, our tool is still completely free to use: No need to pay anything yet.',
    },
    {
        question: 'When it is currently free, how do you make money?',
        answer: 'We do not have any investors and pay for the servers ourselves.',
    },
    {
        question: 'Will prices be increased in the future?',
        answer: 'Definitely not! We will never limit an existing feature to any premium plan. If we change anything about the prices, we will only decrease them - either for everyone or for surveys/accounts with a lot of submissions.',
    },
    {
        question: 'What features are planned in the future?',
        answer: 'We have a lot of exciting stuff planned. In October 2021 we will release a public roadmap, where you can see all of our ideas, comment and vote for your favorite ones.',
    },
    {
        question: 'Why is your free plan so generous?',
        answer: 'In our opinion, it is not great behavior to make users pay for something before they had time to extensively test it. Limiting features to expensive plans or having a very tiny "trial"-version are exactly the things we strongly oppose.',
    },
];

export default function LandingSectionQuestions(props: {index: number}) {
    return (
        <NewLandingPageSection index={props.index} id='faq'>
            <div className='mx-auto lg:max-w-[66rem] xl:max-w-[67rem] flex-col-center'>
                <h2
                    className={
                        'mb-3 text-2xl uppercase text-center ' +
                        'text-blue-200 font-weight-400'
                    }
                >
                    frequently asked{' '}
                    <strong className='text-blue-50 font-weight-700'>
                        questions
                    </strong>
                </h2>
                <div className='mt-6 md:mt-12'>
                    <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3'>
                        {faqs.map((faq, index) => (
                            <div key={index} className='max-w-md'>
                                <dt className='text-base leading-6 text-white font-weight-600'>
                                    {faq.question}
                                </dt>
                                <dd className='mt-2 text-sm text-justify text-gray-200 font-weight-400'>
                                    {faq.answer}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className='px-4 py-2 md:-m-4 !mt-12 border-[2px] border-dashed border-gray-700 rounded-lg w-full md:w-[calc(100%+2rem)] max-w-md md:max-w-full'>
                    <h3 className='text-base leading-6 text-white font-weight-600'>
                        Any further questions? Something is not working? Missing
                        an important feature?
                    </h3>
                    <div className='mt-1 mb-0.5 text-sm text-gray-300 font-weight-400'>
                        Please drop us a line under{' '}
                        <a
                            href='mailto:contact@fastsurvey.de'
                            target='blank'
                            rel='noopener noreferrer'
                            className='text-blue-100 underline font-weight-600'
                        >
                            contact@fastsurvey.de
                        </a>
                        . We will help you and possibly fix any bugs as quickly
                        as we can!
                    </div>
                </div>
            </div>
        </NewLandingPageSection>
    );
}
