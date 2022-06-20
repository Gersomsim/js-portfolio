const path = require('path');

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
        test: '/\.m?js$/', // utiliza la extencion mjs o js mjs es extencion modulos de javascript
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
}