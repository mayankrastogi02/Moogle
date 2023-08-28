// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   mode: 'jit',
//   darkMode: 'class',
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//     'node_modules/daisyui/dist/**/*.js',
//     'node_modules/react-daisyui/dist/**/*.js',
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//       colors: {
//         mgrey: 'rgb(var(--color-mgrey) / <alpha-value>)',
//         mblue: 'rgb(var(--color-mblue)) / <alpha-value>)',
//       },
//     },
//   },
//   plugins: [require("daisyui")],
// }
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        mgrey: 'rgba(var(--color-mgrey), <alpha-value>)',
        mblue: 'rgba(var(--color-mblue), <alpha-value>)',
      },
    },
  },
  plugins: [require("daisyui")],
}
export default config
