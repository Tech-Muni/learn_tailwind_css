module.exports = {
  content: ["*"],
  theme: {
    screens: {
      xsm: '500px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    // See to customize breakpoints we needed put all the breakpoints and directly under screens.
    extend: {
      spacing:{
        13: "3.2rem"
      },
      fontSize:{
        '10xl': ['10rem', {lineHeight: '1.2'}]
      }
    },
  },
  plugins: [],
}
