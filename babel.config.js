module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    env: {
      development: {
        plugins: [],
      },
      production: {
        plugins: ['transform-remove-console'],
      },
    },
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
          root: ['./'],
          alias: {
            $src: './src',
            $api: './api',
            $assets: './assets',
          },
        },
      ],
      [
        'babel-plugin-inline-import',
        {
          extensions: ['.svg'],
        },
      ],
    ],
  }
}
