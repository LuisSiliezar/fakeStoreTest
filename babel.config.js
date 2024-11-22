module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@config': './src/config',
          '@assets': './src/assets',
          '@core': './src/core',
          '@domain': './src/domain',
          '@infrastructure': './src/infrastructure',
          '@presentation': './src/presentation',
        },
      },
    ],
  ],
};
