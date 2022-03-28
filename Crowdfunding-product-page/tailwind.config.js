module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'moderateCyan': '#3cb4ac',
        'darkCyan': '#147b74',
        'darkGray': '#7a7a7a',
        'lightGray': '#F4F4F4',
        'primaryBg': '#FAFAFA',
      },
      backgroundImage: {
        'mobileImg': "url('./src/assets/images/image-hero-mobile.jpg')",
        'desktopImg': "url('./src/assets/images/image-hero-desktop.jpg')",
        'hamburgerMenu': "url('./src/assets/images/icon-hamburger.svg')",
      },
      borderWidth: {
        '0.5': '0.5px',
      },
      spacing: {
        '76': '19rem',
        '100': '25rem',
      },
    },
    fontFamily: {
      sans: ['Commissioner', 'sans-serif'],
    },
  },
  plugins: [],
}
