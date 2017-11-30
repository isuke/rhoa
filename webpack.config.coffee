path = require('path')
webpack = require('webpack')
merge = require('webpack-merge')
CleanWebpackPlugin = require('clean-webpack-plugin')

loader = {}
loader.coffee = ['babel-loader', 'coffee-loader']
loader.css    = [
  { loader: 'style-loader'  , options: sourceMap: true }
  { loader: 'css-loader'    , options: sourceMap: true }
  { loader: 'postcss-loader', options: sourceMap: true }
]
loader.stylus = [
  { loader: 'style-loader'  , options: sourceMap: true }
  { loader: 'css-loader'    , options: sourceMap: true }
  { loader: 'postcss-loader', options: sourceMap: true }
  { loader: 'stylus-loader' , options: sourceMap: true }
]

baseConfig =
  output:
    path: path.resolve("#{__dirname}/dist/")
  module:
    rules: [
      {
        test: /\.vue$/
        use:
          loader: 'vue-loader'
          options:
            loaders:
              coffee: loader.coffee
              stylus: loader.stylus
      }
      {
        test: /\.coffee$/
        use: loader.coffee
      }
      {
        test: /\.css$/
        use: loader.css
      }
      {
        test: /\.styl$/
        use: loader.stylus
      }
    ]
  resolve:
    extensions: ['.vue', '.js']
    alias:
      '@src':        path.resolve(__dirname, 'src')
      '@scripts':    path.resolve(__dirname, 'src', 'scripts')
      '@components': path.resolve(__dirname, 'src', 'components')
      'vue$': 'vue/dist/vue.esm.js'
  externals: {
    '_': 'lodash'
  }
  plugins: [
    new webpack.ProvidePlugin
      'Vue': 'vue'
      '_': 'lodash'
    new CleanWebpackPlugin(['dist'])
    new webpack.optimize.UglifyJsPlugin
      minimize : true
      sourceMap: true
      mangle: true
      compress:
        warnings: false
    new webpack.LoaderOptionsPlugin
      minimize: true
  ]
  devtool: '#source-map'

module.exports = [
  merge baseConfig,
    entry: path.resolve(__dirname + '/src/plugin.js')
    output:
      filename: 'rhoa.min.js'
      libraryTarget: 'window'
      library: 'Rhoa'
  merge baseConfig,
    entry: path.resolve(__dirname + '/src/main.js')
    output:
      filename: 'rhoa.js'
      libraryTarget: 'umd'
      library: 'rhoa'
      umdNamedDefine: true
]