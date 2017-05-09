var webpack = require('webpack'),
  WebpackDevServer = require('webpack-dev-server'),
  config = require('./webpack.config'),
  pkg = require('./package.json');

if (process.env.NODE_ENV === 'development') {
  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    stats: false,
    inline: true,
    historyApiFallback: true
  }).listen(3000, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log('Currently building: ' + pkg.name);
    console.log('Webpack Development Server listening at localhost:3000');
  });
} else {
  var express = require('express');
  var path = require('path');
  var ROOT_PATH = __dirname;
  var INDEX_PATH = path.resolve(ROOT_PATH, 'styleguide');

  var app = express();

  app.set('port', process.env.PORT || 3001);
  app.use(express.static(INDEX_PATH));
  // app.get('/', function(req, res) {
  //   res.status(200).return()
  // })

  var server = app.listen(app.get('port'), function(error) {
    if (error) {
      console.log(error);
    }
    console.log('Express server is listening at localhost: 3000');
  });
}
