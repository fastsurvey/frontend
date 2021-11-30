import React, {useState} from 'react';
import DemoImage1 from '/src/assets/images/image-01-create.png';
import DemoImage2 from '/src/assets/images/image-02-collect.png';
import DemoImage3 from '/src/assets/images/image-03-analyze.png';
import {NewLandingPageSection} from './section';

export default function LandingSectionDemo() {
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
        <NewLandingPageSection index={1}>
            <div className='max-w-6xl space-x-3 space-y-2 flex-col-center'>
                <h2
                    className={
                        'mb-3 text-2xl uppercase text-center ' +
                        'text-blue-200 font-weight-400'
                    }
                >
                    <strong className='text-blue-50 font-weight-700'>
                        how
                    </strong>{' '}
                    does it work?
                </h2>
                <div className='pb-3 space-x-2 flex-row-center'>
                    {steps.map((s, i) => (
                        <button
                            className={
                                'rounded px-3 py-1.5 font-weight-400 text-base ' +
                                'cursor-pointer ringable ' +
                                'hover:bg-gray-800 hover:text-gray-100 ' +
                                (imageIndex === i
                                    ? 'text-gray-100 bg-gray-800 shadow-md '
                                    : 'text-gray-300 ')
                            }
                            onClick={() => setImageIndex(i)}
                        >
                            {s.text}
                        </button>
                    ))}
                </div>
                <div className='w-[calc(100vw-4rem)] lg:w-[60rem] lg:max-w-full'>
                    <div className='relative w-full h-0 pt-[calc((9/16)*100%)] rounded-md shadow-md overflow-hidden'>
                        <div className='absolute top-0 w-full h-full bg-gray-600' />
                        <img
                            className='absolute top-0 w-full h-full'
                            src={
                                [DemoImage1, DemoImage2, DemoImage3][imageIndex]
                            }
                        />
                    </div>
                </div>
            </div>
        </NewLandingPageSection>
    );
}
