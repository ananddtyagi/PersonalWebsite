const rewireHtmlWebpackPlugin = require("react-app-rewire-html-webpack-plugin");

module.exports = function override(config, env) {
  const overrideConfig = {};
  config = rewireHtmlWebpackPlugin(config, env, overrideConfig);
  return config;
};
