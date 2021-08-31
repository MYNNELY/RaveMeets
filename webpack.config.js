module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }

    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  }
};