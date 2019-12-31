/* eslint-disable */

// fake webpack config used only to help make WebStorm resolve imported files
// noinspection JSUnusedLocalSymbols,NpmUsedModulesInstalled
const webpack = require('webpack')

module.exports = {
  resolve: {
    modules: ['node_modules'],
    alias: {
      'styles': path.resolve(__dirname, 'src/styles/')
    }
  },
  context: __dirname
}
