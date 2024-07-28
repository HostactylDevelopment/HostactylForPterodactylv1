
/** Hostactyl TailwindCSS Config */
module.exports = {
    content: ["./resources/*.ejs", "./resources/**/*.ejs", "./resources/**/**/*.ejs"],
    theme: {
      extend: {
        backgroundImage: {
          'custom-gif': "url('/assets/image-1.gif')",
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }