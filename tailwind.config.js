module.exports = {
  purge: {
    enabled: true,
    content: [
      "./src/**/**/*.js", 
      "./public/index.html"],
  },
  theme: {
    extend: {
      backgroundColor:{
        'black-t-50': 'rgba(0,0,0,0.5)'
      },
      width: {
        'product' : "23%"
      }
    },
  },
  variants: {},
  plugins: [],
}
