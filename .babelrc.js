module.exports = {
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: false,
      },
    ],
  ],
  presets: ['next/babel'],
};
