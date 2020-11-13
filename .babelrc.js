module.exports = {
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: true
      }
    ]
  ],
  presets: ['next/babel']
}
