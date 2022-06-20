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
  }
}