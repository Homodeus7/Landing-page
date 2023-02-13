module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: {
        base: '#3BA1FE',
        hover: '#3590e4',
        active: '#4eaafe'
      },
      secondary: {
        hover: 'rgba(35, 99, 159, 0.15)',
        active: 'rgba(35, 99, 159, 0.3)'
      },
      black: '#222831',
      blackSecondary: '#22283195',
      gray: '#63717E',
      success: '#2BD1FF',
      error: '#FF519F',
      white: '#FFFFFF',
    },
    extend: {},
  },
  plugins: [],
}
