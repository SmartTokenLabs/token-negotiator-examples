// config-overrides.js
module.exports = function override(config, env) {

    const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

    config.plugins.push(new NodePolyfillPlugin());

    return config
}