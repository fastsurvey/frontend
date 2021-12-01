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
        {name: 'Pricing', href: '/#pricing'},
        {name: 'FAQ', href: '/#faq'},
        {name: 'Register', href: `https://console.${baseUrl}/register`},
        {name: 'Login', href: `https://console.${baseUrl}/login`},
        {name: 'Status', href: `https://fastsurvey.instatus.com/`},
    ],
    social: [
        {
            name: 'GitHub',
            href: '#',
            icon: () => icons.gitHub,
        },
    ],
};

export default function Footer() {
    return (
        <footer className='bg-gray-900'>
            <div className='max-w-xl p-6 mx-auto overflow-hidden sm:px-6 lg:px-8'>
                <nav
                    className='flex flex-wrap justify-between'
                    aria-label='Footer'
                >
                    {navigation.main.map((item) => (
                        <div key={item.name} className='px-4'>
                            <a
                                href={item.href}
                                className='text-sm text-blue-200 hover:text-blue-50 font-weight-600'
                            >
                                {item.name}
                            </a>
                        </div>
                    ))}
                </nav>
                <div className='mt-6 text-gray-300 flex-row-center font-weight-400'>
                    <p className='px-4 text-sm text-center'>
                        &copy; 2021 FastSurvey
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
                    <p className='px-4 text-sm text-center'>
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
