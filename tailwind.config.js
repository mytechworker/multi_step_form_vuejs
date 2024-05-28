module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '4xl': '0px 0px 11.3px 0px rgba(0, 0, 0, 0.08)',
        '5xl' : '0px 0px 6px 0px #0000001A',
        '6xl' : '1px 1px 3px 0px #0000000D'
      },
      colors:{
          'dark' : '#37415B',
          'sky' : '#18A0D7',
          'light-grey' : '#A4A4A4',
          'secondry-light-gray' : '#BDBDBD'
      },
      borderColor:{
         'light-gray' : '#EDEDED',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}