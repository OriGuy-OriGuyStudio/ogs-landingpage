/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    // './components/**/*.{js,ts,jsx,tsx,mdx}',
    // './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        colorBrandPink50light: '#feeef1' /* pink50 */,
        colorBrandPink300medium: '#f88ba2' /* pink300 */,
        colorBrandPink500dark: '#f55274' /* pink500 */,

        colorBrandPurple500light: '#3521ab' /* purple500 */,
        colorBrandPurple900dark: '#160e48' /* purple900 */,

        colorBrandWhiteYellow100light: '#fefdf5' /* whiteYellow100 */,
        colorBrandWhiteYellow100lightOpacity: 'rgba(254, 253, 245, 0.04)',
        colorBrandWhiteYellow200medium: '#fefbf0' /* whiteYellow200 */,

        colorBrandGray800dark: '#202020' /* gray800 */,

        colorBrandGreen200light: '#e0eec1' /* green200 */,
        colorBrandGreen500medium: '#bcd979' /* green500 */,
        colorBrandGreen700dark: '#859a56' /* green700 */,

        colorBrandCyan200light: '#c9e4eb' /* cyan200 */,
        colorBrandCyan500medium: '#8ac4d4' /* cyan500 */,
        colorBrandCyan600dark: '#7eb2c1' /* cyan600 */,

        colorBrandRed400light: '#d93333' /* red400 */,
        colorBrandRed500medium: '#d00000' /* red500 */,
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      fontSize: {
        textsizebrandh1: 'clamp(3rem, 5vw, 4rem)' /* H1: 48px–64px */,
        textsizebrandh2: 'clamp(2.5rem, 4vw, 3rem)' /* H2: 40px–48px */,
        textsizebrandh3: 'clamp(2rem, 3.5vw, 2.5rem)' /* H3: 32px–40px */,
        textsizebrandh4: 'clamp(1.75rem, 3vw, 2rem)' /* H4: 28px–32px */,
        textsizebrandh5: 'clamp(1.5rem, 2.5vw, 1.5rem)' /* H5: 24px קבוע */,
        textsizebrandh6: 'clamp(1.125rem, 2vw, 1.25rem)' /* H6: 18px–20px */,

        textsizebrandp: 'clamp(1rem, 1.5vw, 1rem)' /* P: 16px קבוע */,
        textsizebrandpsmall:
          'clamp(0.75rem,1.2vw,0.75rem)' /* Small: 12px קבוע */,
        textsizebrandpxsmall:
          'clamp(0.625rem,1vw,0.625rem)' /* XSmall: 10px קבוע */,
        textsizebrandpxxsmall:
          'clamp(0.5rem,0.8vw,0.5rem)' /* XXSmall: 8px קבוע */,
      },
    },
  },
  plugins: [],
};
