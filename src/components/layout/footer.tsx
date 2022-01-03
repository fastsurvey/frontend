import React from 'react';

const VITE_ENV = import.meta.env.VITE_ENV;
let baseUrl =
    VITE_ENV === 'development' ? 'dev.fastsurvey.de' : 'fastsurvey.de';

const navigation = [
    {
        label: 'About',
        elements: [
            {target: '_self', name: 'Why', href: '/#why'},
            {target: '_self', name: 'Demo', href: '/#demo'},
            {
                target: '_self',
                name: 'Pricing',
                href: '/#pricing-for-individuals',
            },
            {target: '_self', name: 'FAQ', href: '/#faq'},
        ],
    },
    {
        label: 'Support',
        elements: [
            {
                target: '_blank',
                name: 'Service Status',
                href: `https://fastsurvey.instatus.com/`,
            },
            {
                target: '_blank',
                name: 'User Guides',
                href: `/documentation/docs/guides/overview`,
            },
            {
                target: '_blank',
                name: 'API Reference',
                href: `/documentation/docs/api/overview`,
            },
        ],
    },
    {
        label: 'Social',
        elements: [
            {
                target: '_blank',
                name: 'GitHub',
                href: 'https://github.com/fastsurvey',
            },
        ],
    },
    {
        label: 'Use FastSurvey',
        elements: [
            {
                target: '_self',
                name: 'Register',
                href: `https://console.${baseUrl}/register`,
            },
            {
                target: '_self',
                name: 'Login',
                href: `https://console.${baseUrl}/login`,
            },
        ],
    },
];

export default function Footer() {
    return (
        <footer className='z-40 bg-gray-850'>
            <div className={'p-6 overflow-hidden sm:px-6 lg:px-8 '}>
                <nav className='grid grid-cols-2 gap-8 md:grid-cols-4'>
                    {navigation.map((column) => (
                        <div>
                            <h3 className='text-sm font-semibold tracking-wider text-gray-200 uppercase'>
                                {column.label}
                            </h3>
                            <ul role='list' className='mt-3 space-y-1'>
                                {column.elements.map((e) => (
                                    <li key={e.name}>
                                        <a
                                            href={e.href}
                                            target={e.target}
                                            className='text-sm text-gray-400 hover:text-gray-100'
                                        >
                                            {e.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
                <div className='pt-6 mt-6 border-t border-gray-500'>
                    <div className='flex w-full text-sm divide-x divide-gray-500'>
                        <div className='px-2 text-gray-200 font-weight-600 '>
                            &copy; {new Date().getFullYear()} FastSurvey
                        </div>

                        {import.meta.env.MODE === 'development' && (
                            <div className='px-2 text-gray-400 font-weight-400'>
                                development
                            </div>
                        )}
                        {import.meta.env.MODE === 'production' && (
                            <>
                                <div className='px-2 text-gray-400 font-weight-400'>
                                    app {import.meta.env.VITE_APP_COMMIT_SHA}
                                </div>
                                <div className='px-2 text-gray-400 font-weight-400'>
                                    documentation{' '}
                                    {import.meta.env.VITE_DOCS_COMMIT_SHA}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
}
