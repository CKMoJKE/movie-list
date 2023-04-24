module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [
    require('@tailwindcss/forms'),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-img': "url('./img/background/movie-collage.jpg')",
        'header-img-shadow': "url('./img/background/shadow.png')"        
      }     
    }
  }
}