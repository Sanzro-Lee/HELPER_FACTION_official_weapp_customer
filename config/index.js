const devEnv = require('./dev.env')
const prodEnv = require('./prod.env')
const path = require('path')

const mainSubDir = ''

function resolveSrc (file) {
  return path.resolve(__dirname, '../src', mainSubDir, file || '')
}

function resolve (file) {
  return path.resolve(__dirname, '..', file || '')
}

module.exports = function getConfig (isProduction) {
  return {
    context: resolveSrc(),
    dllPath: resolve('dll'),
    env: isProduction ? prodEnv : devEnv,
    supportedModes:['wx', 'ali', 'swan', 'qq', 'tt', 'web']
  }
}
