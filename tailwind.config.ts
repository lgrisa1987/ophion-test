import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bright-turquoise': '#36F5BF',
        'mine-shaft': '#282828',
        mercury: '#E5E5E5',
      },
    },
  },
  plugins: [],
};
export default config;
