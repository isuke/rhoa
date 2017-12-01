path = require('path')
webpack = require('webpack')
merge = require('webpack-merge')
CleanWebpackPlugin = require('clean-webpack-plugin')
nodeExternals = require('webpack-node-externals')

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
    'vue': 'Vue'
    '_': 'lodash'
  }
  plugins: [
    new webpack.ProvidePlugin
      'Vue': 'vue'
      '_': 'lodash'
  ]

if process.env.NODE_ENV == 'production'
  productionConfig = merge baseConfig,
    plugins: [
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

  config = [
    merge productionConfig,
      entry: path.resolve(__dirname + '/src/plugin.js')
      output:
        filename: 'rhoa.min.js'
        libraryTarget: 'window'
        library: 'Rhoa'
    merge productionConfig,
      entry: path.resolve(__dirname + '/src/index.js')
      output:
        filename: 'rhoa.js'
        libraryTarget: 'umd'
        library: 'Rhoa'
        umdNamedDefine: true
  ]
else if process.env.NODE_ENV == 'test'
  config = merge baseConfig,
    externals: [nodeExternals()]
    devtool: 'inline-cheap-module-source-map'
else
  console.error "`#{process.env.NODE_ENV}` is not defined."

module.exports = config
