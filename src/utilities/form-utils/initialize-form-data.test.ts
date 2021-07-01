import {initializeFormData} from './initialize-form-data';
import {types} from '@types';

describe('initializeFormData', () => {
    test('sample config 1', () => {
        const sampleConfig: types.SurveyConfig = {
            survey_name: '3123',
            authentication: 'email',
            limit: 100,
            title: '',
            description: '',
            start: 0,
            end: 0,
            draft: false,
            fields: [],
        };

        const formData = initializeFormData(sampleConfig);

        expect(Object.keys(formData).length).toEqual(0);
    });

    test('sample config 2', () => {
        const sampleConfig: types.SurveyConfig = {
            survey_name: '3123',
            authentication: 'email',
            limit: 100,
            title: '',
            description: '',
            start: 0,
            end: 0,
            draft: false,
            fields: [
                {
                    type: 'radio',
                    title: '',
                    description: '',
                    fields: [],
                },
            ],
        };

        const formData = initializeFormData(sampleConfig);

        expect(Object.keys(formData).length).toEqual(1);
        expect(Object.keys(formData)).toContain('1');
        // @ts-ignore
        expect(Object.keys(formData['1']).length).toEqual(0);
    });

    test('sample config 3', () => {
        const sampleConfig: types.SurveyConfig = {
            survey_name: '3123',
            authentication: 'email',
            limit: 100,
            title: '',
            description: '',
            start: 0,
            end: 0,
            draft: false,
            fields: [
                {
                    type: 'radio',
                    title: '',
                    description: '',
                    fields: [
                        {
                            type: 'option',
                            title: '',
                            description: '',
                            required: false,
                        },
                        {
                            type: 'option',
                            title: '',
                            description: '',
                            required: false,
                        },
                    ],
                },
            ],
        };

        const formData = initializeFormData(sampleConfig);

        expect(Object.keys(formData).length).toEqual(1);
        expect(Object.keys(formData)).toContain('1');
        // @ts-ignore
        expect(Object.keys(formData['1']).length).toEqual(2);
    });

    test('sample config 4', () => {
        const sampleConfig: types.SurveyConfig = {
            survey_name: '3123',
            authentication: 'email',
            limit: 100,
            title: '',
            description: '',
            start: 0,
            end: 0,
            draft: false,
            fields: [
                {
                    type: 'radio',
                    title: '',
                    description: '',
                    fields: [
                        {
                            type: 'option',
                            title: '',
                            description: '',
                            required: false,
                        },
                        {
                            type: 'option',
                            title: '',
                            description: '',
                            required: false,
                        },
                    ],
                },
                {
                    type: 'selection',
                    title: '',
                    description: '',
                    min_select: 0,
                    max_select: 0,
                    fields: [
                        {
                            type: 'option',
                            title: '',
                            description: '',
                            required: false,
                        },
                        {
                            type: 'option',
                            title: '',
                            description: '',
                            required: false,
                        },
                        {
                            type: 'option',
                            title: '',
                            description: '',
                            required: false,
                        },
                    ],
                },
                {
                    type: 'text',
                    title: '',
                    description: '',
                    min_chars: 0,
                    max_chars: 0,
                },
            ],
        };

        const formData = initializeFormData(sampleConfig);

        expect(Object.keys(formData).length).toEqual(3);
        expect(Object.keys(formData)).toContain('1');
        expect(Object.keys(formData)).toContain('2');
        expect(Object.keys(formData)).toContain('3');
        // @ts-ignore
        expect(Object.keys(formData['1']).length).toEqual(2);
        // @ts-ignore
        expect(formData['1']['1']).toEqual(false);
        // @ts-ignore
        expect(Object.keys(formData['2']).length).toEqual(3);
        // @ts-ignore
        expect(formData['2']['1']).toEqual(false);
        // @ts-ignore
        expect(formData['3']).toEqual('');
    });
});
