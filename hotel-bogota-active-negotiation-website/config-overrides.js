const {removeModuleScopePlugin} = require("customize-cra");

module.exports = function override(config, env) {
  if (!config.plugins) {
    config.plugins = [];
  }

  config.ignoreWarnings = (config.ignoreWarnings || []).concat({
    message: /source-map-loader/
  });

  config.ignoreWarnings = (config.ignoreWarnings || []).concat({
    message: /source-map-loader/
  });

  removeModuleScopePlugin()(config);

  const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

  config.plugins.push(new NodePolyfillPlugin());

  return config;
};
