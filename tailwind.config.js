module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Certifique-se de que está incluindo todos os arquivos
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"], // Define Open Sans como fonte padrão
        lato: ["Lato", "sans-serif"], // Adiciona Lato como fonte personalizada
      },
    },
  },
  plugins: [],
};
