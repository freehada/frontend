import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { //메인컬러
          blue: "#2A43C4",
          yellow: "#FFD602"
        },  
        netural: { //네츄럴 컬러
          100: "#FFFFFF",
          98: "#F6F7F8",
          80: "#D3D5DA",
          70: "#BABDC5",
          60: "#80848E",
          40: "#606571",
          25: "#33353D",
          20: "#2A2B32",
          10: "#17181C",
          0: "#0A0A0A"
        },
        fontColor: {
          100: '#222222', 
          200: '#333333', 
          300: '#505050', // 사용 예: text-fontColor-300
        },
        lineColor:{
          100: "#05070F",
          90: "#05070F"
        }
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      fontFamily: {
        sans: ['Pretendard Variable', 'sans-serif'], // font-sans
        sticking: ['StickingCloseFont', 'sans-serif'],
      }
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
export default config;
