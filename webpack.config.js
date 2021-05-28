const path = require('path');

module.exports = {
  entry: {
    'dev-jq-helpers': './static/scripts/dev-jq-helpers.js',
    counter: './static-main/js/counter.js',
  },
  output: {
    path: path.resolve('./static/'),
    filename: '[id].js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.join(process.cwd(), 'src'), 'node_modules']
  },

  //mode: process.env === 'production' ? 'production' : 'development',
  mode: 'production',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['"@babel/preset-env"'],
        },
      },
    }],
  },
  plugins: [],
};
