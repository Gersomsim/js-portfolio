const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    // permite saber donde se encunra el proyecto 
    path: path.resolve(__dirname, 'dist'),
    // nombre del archivo resultante
    filename: 'main.js'
  },
  // que es lo que va atrabajar js, svel, react, typescript
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: '/\.m?js$/', // utiliza la extencion mjs o js. mjs es extencion modulos de javascript
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css|.styl$/i,                                                 
        use: [ 
          MiniCssExtractPlugin.loader,
          "css-loader",
          "stylus-loader"
        ],  
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin(),
  ]
}