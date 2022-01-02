// prettier-ignore

const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

const customColors = {
    // Primary
    blue: {
        50: "#DCEEFB",
        100: "#B6E0FE",
        150: "#9DD2F9",
        200: "#84C5F4",
        300: "#62B0E8",
        400: "#4098D7",
        500: "#2680C2",
        600: "#186FAF",
        700: "#0F609B",
        800: "#0A558C",
        900: "#003E6B"
    },  
  
    // Neutrals
    'gray-50': '#f8fafc',
    'gray-75': '#f4f7fa',
    'gray-100': '#f1f5f9',
    'gray-150': '#e9eef4',
    'gray-200': '#e2e8f0',
    'gray-300': '#cbd5e1',
    'gray-400': '#94a3b8',
    'gray-500': '#64748b',
    'gray-600': '#475569',
    'gray-700': '#334155',
    'gray-750': '#283548',
    'gray-800': '#1e293b',
    'gray-850': '#162032',
    'gray-900': '#0f172a',
    'gray-950': '#0B111F',
  
    green: {
        50: "#F0FCF9",
        75: "#DBF9F1",
        100: "#C6F7E9",
        150: "#aaf2dd",
        200: "#8EEDD1",
        300: "#5FE3C0",
        400: "#2DCCA7",
        500: "#17B897",
        600: "#079A82",
        700: "#048271",
        800: "#016457",
        900: "#004440"
    },  
    
    red: {
        50: "#FFEEEE",
        100: "#FACDCD",
        150: "#f6b4b4",
        200: "#F29B9B",
        300: "#E66A6A",
        400: "#D64545",
        500: "#BA2525",
        600: "#A61B1B",
        700: "#911111",
        800: "#780A0A",
        900: "#610404"
    },
    
    yellow: {
        50: "#FFFAEB",
        75: "#fdf4d9",
        100: "#FCEFC7",
        200: "#F8E3A3",
        300: "#F9DA8B",
        400: "#F7D070",
        500: "#E9B949",
        600: "#C99A2E",
        700: "#A27C1A",
        800: "#7C5E10",
        900: "#513C06"
    },

    orange: colors.orange,
    teal: colors.teal,
    sky: colors.sky,
    indigo: colors.indigo,
    purple: colors.purple,
    pink: colors.pink,
    rose: colors.rose
};

module.exports = {
    darkMode: 'class',
    content: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        screens: {
            'xs': '475px',
            ...defaultTheme.screens,
        },
        extend: {
            colors: customColors,
            fill: customColors,
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};