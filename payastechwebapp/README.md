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

- install react gallery: npm install react-image-gallery

- install framer motion: npm install framer-motion

- install react map-gl:  npm i react-map-gl

- install mongoDB: npm install mongodb

- install dotenv package: npm install dotenv

- install JWT npm package:npm install jwt-simple --save

- install crypto-browerify: npm install crypto-browserify

- install react-app rewired: npm install react-app-rewired

- install stream-browerify: npm install stream-browserify

- install vm-browserify: npm install vm-browserify

- install process: npm install process

-npm install customize-cra --save-dev

- to update libraries, run: npm update

below modules to handle HTTP communication
- npm install express --save

- npm install body-parser --save

- to end emails from your server, install: npm install nodemailer


# for adding extra security to the website

- to hash the passwords: npm install bcrypt (never store passwords in plain text. always hash them)

- to prevent brute force attacks to login endpoints, i'm using rate limiting (which helps limit the number of requests to the website; this helps prevent DoS attacks[too many requests slowing down the website/server]). for that: npm install express-rate-limit
