module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Include all your React components
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1890ff', // Example primary color
        secondary: '#faad14', // Example secondary color
        success: '#52c41a',
        error: '#ff4d4f',
        warning: '#faad14',
        info: '#1890ff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example custom font
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
    },
  },
  plugins: [],
};
