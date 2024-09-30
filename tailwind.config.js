import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
const flowbite = require("flowbite-react/tailwind");


/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        './resources/js/**/*.{js,jsx}',  
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
        flowbite.content(),
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    DEFAULT: '#FF6636',
                    800: '#662916',
                    700: '#993D20',
                    600: '#CC522B',
                    500: '#FF6636',
                    400: '#FF855E',
                    300: '#FFA386',
                    200: '#FFDDD1',
                    100: '#FFEEE8',
                },
                gray: {
                    DEFAULT: '#8C94A3',
                    900: '#1D2026',
                    800: '#363B47',
                    700: '#4E5566',
                    600: '#6E7485',
                    500: '#8C94A3',
                    400: '#A1A5B3',
                    300: '#B7BAC7',
                    200: '#CED1D9',
                    100: '#E9EAF0',
                    50: '#F5F7FA',
                },
                secondary: {
                    DEFAULT: '#564FFD',
                    900: '#111033',
                    800: '#222065',
                    700: '#342F98',
                    600: '#453FCA',
                    500: '#564FFD',
                    400: '#7872FD',
                    300: '#9A95FE',
                    200: '#CDCBFE',
                    100: '#EBEBFF',
                },
                success: {
                    DEFAULT: '#23BD33',
                    900: '#07260A',
                    800: '#0E4C14',
                    700: '#15711F',
                    600: '#1C9729',
                    500: '#23BD33',
                    400: '#4FCA5C',
                    300: '#7BD785',
                    200: '#C3E5C6',
                    100: '#E1F7E3',
                },
                warning: {
                    DEFAULT: '#FD8E1F',
                    900: '#331D06',
                    800: '#65390C',
                    700: '#985613',
                    600: '#CC7319',
                    500: '#FD8E1F',
                    400: '#FDA44C',
                    300: '#FEBB79',
                    200: '#FED1A5',
                    100: '#FFF2E5',
                },
                error: {
                    DEFAULT: '#E34444',
                    900: '#2D0E0E;',
                    800: '#5B1B1B;',
                    700: '#882929;',
                    600: '#B63636;',
                    500: '#E34444;',
                    400: '#E96969;',
                    300: '#EE8F8F;',
                    200: '#F4C8C8;',
                    100: '#FFF0F0;',
                }
            }
        },
    },

    plugins: [forms,flowbite.plugin(),],
};
