const WebpackRequireFrom = require("webpack-require-from");
const webpackRequireFromConfig = (module.exports = {
  output: {
    publicPath: "/"
  },
  plugins: [
    new WebpackRequireFrom({
      // see configuration options below
    })
  ]
});