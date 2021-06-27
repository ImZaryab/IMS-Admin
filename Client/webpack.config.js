const WebpackRequireFrom = require("webpack-require-from");
const webpackRequireFromConfig = (module.exports = {
  output: {
    publicPath: "/"
  },

  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' },
            { test: /\.js$/, exclude: '/node_modules', use: 'babel-loader' }
          ]
  },

  plugins: [
    new WebpackRequireFrom({
      // see configuration options below
    })
  ]
});