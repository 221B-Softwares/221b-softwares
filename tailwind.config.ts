import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: '#0B132B', // deep navy
          brass: '#B08968', // brass accent
          parchment: '#F8F5E9', // parchment
          fog: '#1F2430', // mist
        },
      },
    },
  },
  plugins: [],
}
export default config
