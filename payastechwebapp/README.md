to run the app: npm start

npm installations:

- FaBar react icons: npm install react-icons --save
- Styled Components: npm install --save styled-components
- Tailwind css:

  - npm install -D tailwindcss postcss autoprefixer

  - npx tailwindcss init -p

  - in your tailwind.config.js:

    /** @type {import('tailwindcss').Config} \*/
    module.exports = {
    content: [
    "./src/**/\*.{js,jsx,tFs,tsx}", // Include all relevant files in src
    ],
    theme: {
    extend: {},
    },
    plugins: [],
    }

- Router: npm install react-router-dom
  (visit https://reactrouter.com/en/main/start/tutorial for more details on React Router)

- if you want to add a scroll effect in your web app: npm install react-scroll

- Font Awesome Installation:

  - npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
  - Font Awesome CDN: <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />

- install EmailJS library for React:
  - npm install @emailjs/browser --save
  - npm install @emailjs/browser axios (to make HTTP requests using RestAPI calls)

- install express, mongoose, cors and dotenv for enviornment variables: npm install express mongoose cors dotenv

- install axios: npm install axios

- install cors: npm install cors

- install framer-motion: npm install framer-motion
