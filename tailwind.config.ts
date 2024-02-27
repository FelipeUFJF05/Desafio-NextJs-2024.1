import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero': "url('/Home/images/homem com cordas.jpg')",
        'split_image': "url('/Home/images/imagem dividida.jpg')",
        'background-login': "url('/Home/images/fundo-login.png')",
        'background-leao': "url('/Home/images/fundo leao.png')",
        'background-mulher': "url('/Home/images/mulher treinando.jpg')",
        'background-homem': "url('/Home/images/homem com halteres.jpg')",
        'background-mulher_com_peso': "url('/Home/images/mulher com peso.jpg')"
      },
      screens: {
        md: '768px',
        lg: '1280px',
        xl: '1920px',
        "2xl": '2560px',
        "3xl": '3440px'
      }
    },
  },
  plugins: [],
}
export default config
