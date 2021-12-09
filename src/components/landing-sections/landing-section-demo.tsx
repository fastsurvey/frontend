import React, {useState} from 'react';
import DemoImage1 from '/src/assets/images/editor.png';
import DemoImage1Mobile from '/src/assets/images/editor-mobile.png';
import DemoImage2 from '/src/assets/images/form.png';
import DemoImage2Mobile from '/src/assets/images/form-mobile.png';
import DemoImage3 from '/src/assets/images/results.png';
import DemoImage3Mobile from '/src/assets/images/results-mobile.png';
import {LandingPageSection} from './section';

export default function LandingSectionDemo(props: {index: number}) {
    const [imageIndex, setImageIndex] = useState<number>(0);

    const steps = [
        {
            text: (
                <>
                    <strong>1. Create</strong> a survey
                </>
            ),
            image: DemoImage1,
        },
        {
            text: (
                <>
                    <strong>2. Collect</strong> your answers
                </>
            ),
            image: DemoImage2,
        },
        {
            text: (
                <>
                    <strong>3. Analyze</strong> the results
                </>
            ),
            image: DemoImage3,
        },
    ];

    return (
        <LandingPageSection index={props.index} id='demo'>
            <div className='relative max-w-6xl space-x-3 space-y-2 flex-col-center'>
                <h2
                    className={
                        'mb-3 text-2xl uppercase text-center ' +
                        'text-blue-200 font-weight-400'
                    }
                >
                    <strong className='text-blue-50 font-weight-700'>
                        how
                    </strong>{' '}
                    <span className='whitespace-nowrap'>does it work?</span>
                </h2>
                <div className='flex-wrap pb-3 gap-x-2 gap-y-2 flex-row-center'>
                    {steps.map((s, i) => (
                        <button
                            key={i}
                            className={
                                'rounded px-3 py-1.5 font-weight-400 text-base ' +
                                'cursor-pointer ringable whitespace-nowrap ' +
                                'hover:bg-gray-800 hover:text-gray-100 ' +
                                (imageIndex === i
                                    ? 'text-gray-100 bg-gray-800 shadow-md '
                                    : 'text-gray-300 ')
                            }
                            onClick={() => setImageIndex(i)}
                            data-cy={`button-step-${i} ${
                                imageIndex === i ? 'isactive' : 'isinactive'
                            }`}
                        >
                            {s.text}
                        </button>
                    ))}
                </div>
                <div
                    className={
                        'w-full sm:w-[36rem] md:w-[44rem] lg:w-[60rem] lg:max-w-full !m-0 ' +
                        'rounded-lg shadow-md overflow-hidden'
                    }
                >
                    <img
                        className='hidden w-full h-full sm:block'
                        src={[DemoImage1, DemoImage2, DemoImage3][imageIndex]}
                    />
                    <img
                        className='block w-full h-full sm:hidden'
                        src={
                            [
                                DemoImage1Mobile,
                                DemoImage2Mobile,
                                DemoImage3Mobile,
                            ][imageIndex]
                        }
                    />
                </div>
            </div>
        </LandingPageSection>
    );
}
