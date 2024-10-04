import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    
      extend: {
        colors: {
          'primary': {
            DEFAULT: '#0016DB',
            'dark' : "#000D8A",
            'medium': "#4db8ff",
            'light': "#D7EFFF"
            // more shades here /*  '900' : '#hexCode'
          },
          'secondary': {
            DEFAULT: '#A200CC',
            // more shades here /*  '900' : '#hexCode'
          },
          'tertiary': {
            DEFAULT: '#8B8A90',
            'dark': '#49454B'
            // more shades here /*  '900' : '#hexCode'
          },
          'dark': {
            DEFAULT: '#1B171E',
            // more shades here /*  '900' : '#hexCode'
          },
          'neutral': {
            DEFAULT: '#DCDCDE',
            'medium': '#F1F1F1',
            'light': '#F8F8F8',
            // more shades here /*  '900' : '#hexCode'
          },
          'light': "#fff",
          'cj': {
            'terminator': '#DEEBF7',
            'decision': '#E7D2FF',
            'member': '#D1BDE5',
            'guest': '#A3A7C8',
            'staff': '#83A5D8',
          },
          'sbp':{
            'image' : '#D8E0E7',
            'phyEvid' : '#93D4FF',
            'custAct' : '#E7D2FF',
            'emplfrontAct' : '#83A5D8',
            'emplbackAct' : '#93D1FF',
            'suppSys' : '#CBD3DA',
            'likelyPainPt' : '#FFD2AC'
          }
        },
        fontFamily: {
          'montserrat': ['Montserrat', 'sans-serif']
        },
        fontSize: {
          'h1': ['3.5rem', {
            lineHeight: '4.5rem',
            fontWeight: '800'
          }],
          'h2': ['2.5rem', {
            lineHeight: '3.5rem',
            fontWeight: '700'
          }],
          'h3': ['1.75rem', {
            lineHeight: '2.5rem',
            fontWeight: '700'
          }],
          'h4': ['1.5rem', {
            lineHeight: '1.5rem',
            fontWeight: '700'
          }],
          'body-xl': ['1.5rem', {
            lineHeight: '1.688rem',
            fontWeight: '500'
          }],
          'body-lg': ['1.25rem', {
            lineHeight: '1.688rem',
            fontWeight: '500'
          }],
          'body-lg-bold': ['1.25rem', {
            lineHeight: '1.688rem',
            fontWeight: '700'
          }],
          'body-lg-semi-bold': ['1.25rem', {
            lineHeight: '1.688rem',
            fontWeight: '500'
          }],
          'body': ['0.875rem', {
            lineHeight: '1.063rem',
            fontWeight: '500'
          }],
          'body-semi-bold': ['0.875rem', {
            lineHeight: '1.063rem',
            fontWeight: '700'
          }],
          'title-bold': ['1rem', {
            lineHeight: '1.125',
            fontWeight: '700'
          }],
          'title-semi-bold': ['1rem', {
            lineHeight: '1.688',
            fontWeight: '700'
          }],
          'title-small': ['0.75rem', {
            lineHeight: '1.688',
            fontWeight: '700'
          }],
          'title': ['1rem', {
            lineHeight: '1.688',
            fontWeight: '500'
          }],
        }
      },
    
  },

};
export default config;
