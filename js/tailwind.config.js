/** @type {import('tailwindcss').Config} */
module.exports = {
    content: {
        relative: true,
        files: [
            "../index.html",
            "./*.js",
        ],
    },
    darkMode: 'media',
    theme: {
      extend: {},
      container: {
        center: true,

        screens: {
          sm: '560px',
          md: '688px',
          lg: '944px',
          xl: '1202px',
          '2xl': '1456px',
        },
      },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
      ]
  }