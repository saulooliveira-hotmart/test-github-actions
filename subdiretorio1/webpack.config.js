const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // arquivo de entrada da aplicação
  output: {
    path: path.resolve(__dirname, 'build'), // diretório de saída
    filename: 'bundle.js' // arquivo de saída
  },
  module: {
    rules: [
      {
        test: /\.js$/, // arquivos com extensão .js
        exclude: /node_modules/, // exclui a pasta node_modules
        use: {
          loader: 'babel-loader', // utiliza o loader do babel
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // preset para transpilar o código React e ES6
          }
        }
      },
      {
        test: /\.css$/, // arquivos com extensão .css
        use: ['style-loader', 'css-loader'] // utiliza os loaders do CSS
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html', // arquivo HTML de entrada
      filename: 'index.html' // arquivo HTML de saída
    })
  ],
  devServer: {
    static: path.join(__dirname, 'build'), // diretório do servidor de desenvolvimento
    compress: true, // habilita a compressão
    port: 3000 // porta do servidor de desenvolvimento
  }
};
