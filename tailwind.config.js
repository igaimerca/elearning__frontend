module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/layouts/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                textColor: '#050B24',
                neutral: {
                    50: '#fff',
                    200: '#F5F5F5',
                    250: '#F7F7FA',
                    300: '#F0F0F0',
                    400: '#D9D9D9',
                    500: '#BFBFBF',
                    600: '#8C8C8C',
                    700: '#595959',
                    800: '#454545',
                    850: '#262626',
                    900: '#1F1F1F',
                    950: '#141414'
                },
                primary: {
                    100: '#F0F2FD',
                    200: '#DAE0FA',
                    300: '#BDC8F6',
                    400: '#9FAEF2',
                    DEFAULT: '#8295EE',
                    600: '#667EEA',
                    700: '#576BC7',
                    800: '#4859A6',
                    900: '#3A4885',
                    950: '#2E3969'
                },
                green: {
                    100: '#EBFCEB',
                    200: '#CFF8CF',
                    300: '#A9F2A8',
                    400: '#82EB80',
                    500: '#5CE659',
                    DEFAULT: '#38E035',
                    700: '#30BE2D',
                    800: '#289F26',
                    900: '#20801E',
                    950: '#196518'
                },
                pink: {
                    100: '#F8E7F8',
                    200: '#EFC5ED',
                    300: '#E298DF',
                    400: '#D468D0',
                    500: '#C73AC2',
                    DEFAULT: '#BB0FB4',
                    700: '#9F0D99',
                    800: '#850B80',
                    900: '#6B0967',
                    950: '#540751'
                },
                orange: {
                    100: '#FFF7E6',
                    200: '#FFEBC2',
                    300: '#FFDA91',
                    400: '#FFC95E',
                    500: '#FFB92E',
                    DEFAULT: '#FFAA00',
                    700: '#D99100',
                    800: '#B57900',
                    900: '#916100',
                    950: '#734C00'
                },
                purple: {
                    100: '#F5F0FE',
                    200: '#E6DBFD',
                    300: '#D2BFFB',
                    400: '#BDA1F9',
                    500: '#A984F8',
                    DEFAULT: '#9669F6',
                    700: '#8059D1',
                    800: '#6B4BAF',
                    900: '#563C8C',
                    950: '#442F6F'
                },
                red: {
                    100: '#FCE7EA',
                    200: '#F7C5CE',
                    300: '#F097A6',
                    400: '#EA677D',
                    500: '#E33956',
                    DEFAULT: '#D81E4B',
                    700: '#BC0C2A',
                    800: '#9D0A23',
                    900: '#7E081C',
                    950: '#630616'
                },
                cyan: {
                    100: '#E7F8F8',
                    200: '#C5EFEF',
                    300: '#98E2E2',
                    400: '#68D4D4',
                    500: '#3AC7C7',
                    DEFAULT: '#0FBBBB',
                    700: '#0D9F9F',
                    800: '#0B8585',
                    900: '#096B6B',
                    950: '#075454'
                }
            },
            boxShadow: {
                100: '0px 2px 2px rgba(169, 185, 255, 0.12)',
                200: '0px 2px 2px rgba(79, 98, 182, 0.08), 0px 5px 5px rgba(169, 185, 255, 0.13)',
                300: '0px 4px 4px rgba(58, 72, 133, 0.08), 0px 3px 3px rgba(79, 98, 182, 0.1), 0px 7px 7px rgba(169, 185, 255, 0.15)',
                'hover-button': '2px 2px 18px 2px rgba(58, 72, 133, 0.36)',
                navbar: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                'side-menu': '0px 110.802px 88.642px rgba(141, 145, 160, 0.0196802), 0px 46.2906px 37.0325px rgba(141, 145, 160, 0.0282725), 0px 24.7492px 19.7993px rgba(141, 145, 160, 0.035), 0px 13.8742px 11.0994px rgba(141, 145, 160, 0.0417275), 0px 7.36848px 5.89478px rgba(141, 145, 160, 0.0503198), 0px 3.06619px 2.45295px rgba(0, 0, 0, 0.07)',
                'line-shadow': '0px 2px #F0F0F0',
                schedule: 'box-shadow: 0px 2px 2px 0px #A9B9FF1F',
                'line-sm-shadow': '0px .09rem #F0F0F0',
                400: '0px 2px 2px rgba(169, 185, 255, 0.12)',
                event: '0px 2px 2px 0px #A9B9FF1F',
                select: '0px 2px 2px rgba(169, 185, 255, 0.12)',
                graph: '0px 2px 2px rgba(79, 98, 182, 0.08), 0px 5px 5px rgba(169, 185, 255, 0.13)',
                assignmentCard: '0px 2px 2px rgba(79, 98, 182, 0.08), 0px 5px 5px rgba(169, 185, 255, 0.13)'
            },
            fontFamily: {
                sans: ['Work Sans', 'sans-serif']
            },
            keyframes: {
                slideshow: {
                    from: {
                        transform: 'translateX(120%)',
                        left: '-20px'
                    },
                    to: { transform: 'translateX(0)', left: '0' }
                }
            },
            animation: {
                slideshow: 'slideshow 1s ease-in-out alternate'
            },
            fontSize: {
                sm: ['16px'],
                midi: ['14px'],
                md: ['20px']
            }
        }
    },
    plugins: [require('@tailwindcss/line-clamp')]
}
