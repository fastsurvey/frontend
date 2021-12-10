import React, {useState} from 'react';
import {icons} from '/src/assets/icons';
import {LandingPageSection} from './section';
import {backend} from '/src/utilities';

const features = [
    {
        name: 'Your Own Servers',
        detail: 'You are able to see the full source code that is being used and you know 100% about what is going on.',
        icon: icons.lock,
    },
    {
        name: 'Custom Domain',
        detail: (
            <>
                Your surveys can be hosted at something like{' '}
                <span className='text-blue-500 cursor-not-allowed font-weight-700'>
                    survey.
                    <wbr />
                    yourcompany.
                    <wbr />
                    com
                </span>{' '}
                instead of{' '}
                <span className='text-blue-500 cursor-not-allowed font-weight-700'>
                    fastsurvey.
                    <wbr />
                    de
                </span>
                .
            </>
        ),
        icon: icons.compass,
    },
    {
        name: 'Custom Look',
        detail: 'Apply your corporate identity to fonts, colors, logos, icons, etc.',
        icon: icons.paint,
    },
    {
        name: 'Team Collaboration',
        detail: 'Edit surveys and analyze results collaboratively directly within FastSurvey.',
        icon: icons.chatGroup,
    },
];

export default function LandingSectionPricingForBusinesses(props: {
    index: number;
}) {
    return (
        <LandingPageSection index={props.index} id='pricing-for-businesses'>
            <h2
                className={
                    'mb-3 text-2xl uppercase text-center ' +
                    'text-blue-200 font-weight-400'
                }
            >
                <strong className='text-blue-50 font-weight-700'>
                    Self-host
                </strong>{' '}
                fastsurvey{' '}
                <span className='whitespace-nowrap'>for full control!</span>
            </h2>
            <div className='max-w-3xl mt-4 mb-8 text-center md:my-8'>
                <div className='grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2'>
                    {features.map((feature) => (
                        <div key={feature.name} className='pt-6 '>
                            <div className='flow-root h-full px-4 pb-4 bg-gray-200 rounded-lg'>
                                <div className='-mt-6'>
                                    <div>
                                        <span className='inline-flex items-center justify-center p-3 bg-green-100 rounded-md shadow-lg'>
                                            <div className='w-6 h-6 svg-landing-enterprise-card'>
                                                {feature.icon}
                                            </div>
                                        </span>
                                    </div>
                                    <h3 className='mt-3 text-base tracking-tight text-gray-900 font-weight-700'>
                                        {feature.name}
                                    </h3>
                                    <p className='mt-1 text-sm leading-snug text-center text-gray-600 font-weight-500'>
                                        {feature.detail}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ContactSection />
        </LandingPageSection>
    );
}

function ContactSection() {
    const [email, setEmail] = useState('');
    const [submissionState, setSubmissionState] = useState<
        'not-submitted' | 'submitting' | 'submitted'
    >('not-submitted');

    const submittable =
        submissionState !== 'submitting' && new RegExp('^.+@.+$').test(email);

    function submit() {
        const onSuccess = () => {
            setSubmissionState('submitted');
        };
        if (submittable) {
            setSubmissionState('submitting');
            backend.postSubmission(
                'fastsurvey',
                'self-hosting-notification',
                {1: email},
                onSuccess,
                onSuccess,
            );
        }
    }

    return (
        <div className='relative w-full max-w-3xl px-4 py-10 overflow-hidden rounded-lg shadow-xl bg-rose-600 sm:py-12'>
            <div
                aria-hidden='true'
                className='absolute inset-0 -mt-72 sm:-mt-32 md:mt-0'
            >
                <svg
                    className='absolute inset-0 w-full h-full'
                    preserveAspectRatio='xMidYMid slice'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 1463 360'
                >
                    <path
                        className='text-blue-500 text-opacity-40'
                        fill='currentColor'
                        d='M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z'
                    />
                    <path
                        className='text-blue-700 text-opacity-40'
                        fill='currentColor'
                        d='M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z'
                    />
                </svg>
            </div>
            <div className='relative flex-col-center'>
                <h2 className='mb-4 text-2xl tracking-tight text-center text-white font-weight-500 sm:text-2xl'>
                    Get notified when we&rsquo;re launching.
                </h2>
                {submissionState !== 'submitted' && (
                    <div className='w-full max-w-md mx-auto text-sm bg-white rounded flex-row-center'>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            className={
                                'flex-grow px-2.5 py-1 rounded h-9 font-weight-500 ' +
                                'ringable z-0 focus:z-10 ' +
                                (submissionState !== 'submitting'
                                    ? 'cursor-text '
                                    : 'cursor-not-allowed ')
                            }
                            placeholder='you@yourcompany.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={(
                                e: React.KeyboardEvent<HTMLInputElement>,
                            ) => {
                                if (e.key === 'Escape') {
                                    // @ts-ignore
                                    e.target.blur();
                                } else if (e.key === 'Enter') {
                                    // @ts-ignore
                                    e.target.blur();
                                    submit();
                                }
                            }}
                            disabled={submissionState === 'submitting'}
                        />
                        <button
                            type='button'
                            className={
                                'text-blue-800 bg-blue-100 rounded font-weight-600 ' +
                                'h-9 px-2.5 py-1 rounded-none rounded-r relative ' +
                                'ringable z-0 focus:z-10 focus:rounded-l ' +
                                (submittable
                                    ? 'focus:text-blue-900 focus:bg-blue-50 ' +
                                      'hover:text-blue-900 hover:bg-blue-50 '
                                    : 'cursor-not-allowed ')
                            }
                            onClick={submit}
                        >
                            <span
                                className={
                                    submissionState === 'submitting'
                                        ? 'opacity-0'
                                        : ''
                                }
                            >
                                Notify me
                            </span>
                            {submissionState === 'submitting' && (
                                <div
                                    className={
                                        'flex-row-center space-x-0.5 font-weight-600 z-10 ' +
                                        'absolute top-0 left-0 w-full h-full rounded text-blue-900 '
                                    }
                                >
                                    ...
                                </div>
                            )}
                        </button>
                    </div>
                )}
                {submissionState === 'submitted' && (
                    <div className='text-sm text-gray-200 font-weight-500 flex-col-center md:flex-row md:h-9'>
                        <span className='flex-row-center'>
                            <div className='w-5 h-5 mr-1 svg-landing-enterprise-notify'>
                                {icons.check}
                            </div>
                            We'll let your inbox know:
                        </span>{' '}
                        <strong className='ml-1'>{email}</strong>
                        <button
                            className='mt-2 ml-3 text-gray-200 underline md:mt-0 font-weight-500'
                            onClick={() => setSubmissionState('not-submitted')}
                        >
                            typo?
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
