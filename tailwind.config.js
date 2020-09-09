
module.exports = {
    purge: {
        enabled: false,
        content: [
            './src/**/*.js',
            './src/**/*.jsx',
            './src/**/*.ts',
            './src/**/*.tsx',
            './public/**/*.html',
        ],
    },
    theme: {
        extend: {
            boxShadow: {
                outline: '0 0 0 3px rgba(100, 100, 100, 0.25)',
            }
        }
    }
};