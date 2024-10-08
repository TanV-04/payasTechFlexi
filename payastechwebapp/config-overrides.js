const webpack = require("webpack"); // Import webpack
const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = function override(config, env) {
  // Add fallback for 'crypto'
  config.resolve.fallback = {
    stream: require.resolve("stream-browserify"),
    crypto: require.resolve("crypto-browserify"),
    vm: require.resolve("vm-browserify"),
    buffer: require.resolve("buffer/"),
    process: require.resolve("process/browser"),
  };

  config.plugins.push(
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ['buffer', 'Buffer'],
    })
  );

  return config;
};
