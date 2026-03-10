/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'ice-blue': '#0EA5E9',
        'arctic-teal': '#06B6D4',
        'deep-navy': '#0F172A',
        'crisp-white': '#F8FAFC',
        'slate-gray': '#334155',
        'cool-green': '#10B981',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
