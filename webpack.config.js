const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Weather',
      template: 'src/index.html'
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
        {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        },
        {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
            presets: [
                ['@babel/preset-env', { targets: "defaults" }]
            ]
            }
        }
        },
    ]
  }
};