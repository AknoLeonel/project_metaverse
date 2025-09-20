/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary-black': '#0D1117', // Fundo azul escuro (quase preto)
        'secondary-white': '#c7c7c7', // Mantido para textos secundários
        'bgt-blue': '#2563EB', // Azul principal da BGT para botões e detalhes
        'bgt-light-blue': '#BFDBFE', // Um azul mais claro para destaques
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [],
};
