const { merge } = require('webpack-merge')
const nuxt = require('../../nuxt.config.js')

const extend = {
  srcDir: __dirname
}


module.exports = merge(nuxt, extend)