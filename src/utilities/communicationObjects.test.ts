
import { generateInitialFormData } from './communicationObjects';
import { ConfigInterface } from './fieldTypes';

describe('generateInitialFormData', () => {
    test('sample config 1', () => {
        
        const sampleConfig: ConfigInterface = {
            title: '',
            description: '',
            start: 0,
            end: 0,
            public: true,
            fields: [],
        };
        
        const formData = generateInitialFormData(sampleConfig);
        
        expect(Object.keys(formData).length).toEqual(0);
    });

    test('sample config 2', () => {

        const sampleConfig: ConfigInterface = {
            title: '',
            description: '',
            start: 0,
            end: 0,
            public: true,
            fields: [
                {
                    type: 'Radio',
                    title: '',
                    description: '',
                    properties: {
                        fields: [],
                    },
                },
            ],
        };

        const formData = generateInitialFormData(sampleConfig);

        expect(Object.keys(formData).length).toEqual(1);
        expect(Object.keys(formData)).toContain('1');
        // @ts-ignore
        expect(Object.keys(formData['1']).length).toEqual(0);
    });

    test('sample config 3', () => {

        const sampleConfig: ConfigInterface = {
            title: '',
            description: '',
            start: 0,
            end: 0,
            public: true,
            fields: [
                {
                    type: 'Radio',
                    title: '',
                    description: '',
                    properties: {
                        fields: [
                            {
                                type: 'Option',
                                title: '',
                            }, {
                                type: 'Option',
                                title: '',
                            },
                        ],
                    },
                },
            ],
        };

        const formData = generateInitialFormData(sampleConfig);

        expect(Object.keys(formData).length).toEqual(1);
        expect(Object.keys(formData)).toContain('1');
        // @ts-ignore
        expect(Object.keys(formData['1']).length).toEqual(2);
    });

    test('sample config 4', () => {

        const sampleConfig: ConfigInterface = {
            title: '',
            description: '',
            start: 0,
            end: 0,
            public: true,
            fields: [
                {
                    type: 'Radio',
                    title: '',
                    description: '',
                    properties: {
                        fields: [
                            {
                                type: 'Option',
                                title: '',
                            }, {
                                type: 'Option',
                                title: '',
                            },
                        ],
                    },
                }, {
                    type: 'Selection',
                    title: '',
                    description: '',
                    properties: {
                        min_select: 0,
                        max_select: 0,
                        fields: [
                            {
                                type: 'Option',
                                title: '',
                            }, {
                                type: 'Option',
                                title: '',
                            }, {
                                type: 'Option',
                                title: '',
                            },
                        ],
                    },
                }, {
                    type: 'Text',
                    title: '',
                    description: '',
                    properties: {
                        min_chars: 0,
                        max_chars: 0,
                    },
                },
            ],
        };

        const formData = generateInitialFormData(sampleConfig);

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
