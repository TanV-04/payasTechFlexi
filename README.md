This is a re-creation of https://payastechnologies.com/ using MERN stack.

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
    "./src/**/\*.{js,jsx,ts,tsx}", // Include all relevant files in src
    ],
    theme: {
    extend: {},
    },
    plugins: [],
    }

- Router: npm install react-router-dom
  (visit https://reactrouter.com/en/main/start/tutorial for more details on React Router)

- if you want to add a scroll effect in your web app: npm install react-scroll
