const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin')
const MinimizePlugin = require('css-minimizer-webpack-plugin')
const terserPlugin = require( 'terser-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    // permite saber donde se encunra el proyecto 
    path: path.resolve(__dirname, 'dist'),
    // nombre del archivo resultante
    filename: '[name].[contenthash].js',
    assetModuleFilename: "assets/images/[hash][ext][query]"
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
      {
        test: /\.png/,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options:{
            // limite del tamaño del archivo
            limit: 10000,
            // Tipo de dato
            mimetype: 'application/font-woff',
            //nombre del archivo
            name: "[name].[contenthash].[ext]",
            // salida de los archivos
            outputPath: "./assets/fonts/",

            publicPath: "./assets/fonts/",
            esModule: false
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].[contenthash].css'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets/images"),
          to: "assets/images"
        }
      ]
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new MinimizePlugin(),
      new terserPlugin()
    ]
  }
}