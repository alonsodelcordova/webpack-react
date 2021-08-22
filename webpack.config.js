const path = require('path')

const HTmlWebpack = require('html-webpack-plugin')

module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output: {
      path: path.join(__dirname + '/dist'),
      filename: 'bundle.js'
   },
   devServer: {
      port: 4000,
      historyApiFallback: true,

   },
   resolve:{
      extensions: ['.js','.jsx']
   },
   module: {
      rules: [
         {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: [ 'babel-loader']
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.js$/,
            enforce: 'pre',
            use: ['source-map-loader'],
          },
      ]
   },
   plugins: [
      new HTmlWebpack({
         template: './public/index.html'
      })
   ]

}