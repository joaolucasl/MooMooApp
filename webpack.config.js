var webpack = require('webpack');
var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {
  entry:{
    app:'./src/app.js'
  },
  output: {
    path:'src/public/js',
    filename: 'app.js'
  },
   module: {
    loaders: [
      {
        test: /(\.js[a-zA-Z]*)$/, //  This RegEx finds .js* files, including js and jsx extensions
        loader: 'jsx-loader',
        exclude: [node_modules_dir],
      }
    ]
  },
  plugins: [new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    },
    minimize: true
  }),
           new webpack.DefinePlugin({
             'process.env': {NODE_ENV: '"production"'}
           })],
  watch: true
};
