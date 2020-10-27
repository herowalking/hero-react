module.exports = {
  entry: {
    main: './index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [['@babel/plugin-transform-react-jsx', {prama: 'createElement'}]]
          }
        }
      }
    ]
  },
  mode: 'development',
  optimization: {
    minimize: false
  }
}