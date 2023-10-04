module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'babel-plugin-styled-components',
      ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
    ],
  }
}
