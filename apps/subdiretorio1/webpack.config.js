'use strict';

const webpackConfig = require('webpack-config');

// const config = webpackConfig;
// module.exports = webpackConfig;
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  // if (argv.mode === 'development') {
    // config.plugins.push(
    //   new HtmlWebpackPlugin({
    //     template: 'public/index.html',
    //     filename: 'index.html'
    //   })
    // );
  // }
  //
  // if (argv.mode === 'production') {
    //...
  // }

  return webpackConfig;
  // return merge(config, webpackConfig);
};
