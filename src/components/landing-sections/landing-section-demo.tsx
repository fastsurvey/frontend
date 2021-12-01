import React, {useState} from 'react';
import DemoImage1 from '/src/assets/images/image-01-create.png';
import DemoImage2 from '/src/assets/images/image-02-collect.png';
import DemoImage3 from '/src/assets/images/image-03-analyze.png';
import {NewLandingPageSection} from './section';

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
        <NewLandingPageSection index={props.index} id='demo'>
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
                    does it work?
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
                        >
                            {s.text}
                        </button>
                    ))}
                </div>
                <div className='w-full sm:w-[36rem] md:w-[44rem] lg:w-[60rem] lg:max-w-full !m-0'>
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
