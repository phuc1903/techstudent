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
                    DEFAULT: '#FFA427',
                    900: '#995F16',
                    800: '#B2701A',
                    700: '#CC811F',
                    600: '#E69224',
                    500: '#FFA427',
                    400: '#FF9230',
                    300: '#FFAD5F',
                    200: '#FFC890',
                    100: '#FFE3C1',
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
                    DEFAULT: '#4C84FF',
                    900: '#002FCC',
                    800: '#003AFF',
                    700: '#1A52FF',
                    600: '#336BFF',
                    500: '#4C84FF',
                    400: '#659DFF',
                    300: '#8FB7FF',
                    200: '#BAD2FF',
                    100: '#E4ECFF',
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
