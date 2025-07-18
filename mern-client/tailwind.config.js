import { theme } from 'flowbite-react';


/** @type {import('tailwindcss').Config} */
export default  {
  content: [
    // ...
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*'
  ],
  theme:{
    extend:{},
  },
  plugins: [require('flowbite/plugin')],
}