import React from 'react';
import {icons} from '/src/assets/icons';

const VITE_ENV = import.meta.env.VITE_ENV;
let baseUrl =
    VITE_ENV === 'development' ? 'dev.fastsurvey.de' : 'fastsurvey.de';

/* This example requires Tailwind CSS v2.0+ */
const navigation = {
    main: [
        {name: 'Why', href: '/#why'},
        {name: 'Demo', href: '/#demo'},
        {name: 'Pricing', href: '/#pricing-for-individuals'},
        {name: 'FAQ', href: '/#faq'},
        {name: 'Register', href: `https://console.${baseUrl}/register`},
        {name: 'Login', href: `https://console.${baseUrl}/login`},
        {name: 'Status', href: `https://fastsurvey.instatus.com/`},
    ],
    social: [
        {
            name: 'GitHub',
            href: 'https://github.com/fastsurvey',
            icon: () => icons.gitHub,
        },
    ],
};

export default function Footer() {
    return (
        <footer className='bg-gray-900'>
            <div
                className={
                    'p-6 overflow-hidden sm:px-6 lg:px-8 ' +
                    'mx-auto w-full sm:max-w-md md:max-w-xl'
                }
            >
                <nav
                    className={
                        'flex flex-wrap justify-center gap-y-1.5 ' +
                        'md:justify-between md:gap-y-0'
                    }
                    aria-label='Footer'
                >
                    {navigation.main.map((item) => (
                        <div key={item.name} className='px-4 md:px-4'>
                            <a
                                href={item.href}
                                className='text-sm text-blue-200 hover:text-blue-50 font-weight-600'
                            >
                                {item.name}
                            </a>
                        </div>
                    ))}
                </nav>
                <div
                    className={
                        'flex-col-center xs:flex-row gap-y-1 xs:gap-y-0 ' +
                        'mt-6 text-gray-300 font-weight-400'
                    }
                >
                    <p className='w-48 px-4 text-sm text-center'>
                        &copy; {new Date().getFullYear()} FastSurvey
                    </p>
                    <div className='flex-max' />
                    {navigation.social.map((item) => (
                        <a key={item.name} href={item.href}>
                            <span className='sr-only'>{item.name}</span>
                            <div className='w-6 h-6 svg-footer'>
                                <item.icon />
                            </div>
                        </a>
                    ))}
                    <div className='flex-max' />
                    <p className='w-48 px-4 text-sm text-center'>
                        {import.meta.env.MODE === 'development' && (
                            <>development</>
                        )}
                        {import.meta.env.MODE === 'production' && (
                            <>version {import.meta.env.VITE_COMMIT_SHA}</>
                        )}
                    </p>
                </div>
            </div>
        </footer>
    );
}
