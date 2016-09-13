import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import winston from 'winston';

import webpackConfig from '../webpack.config.js';
import config from './config/config';

const app = express();

const compiler = webpack(webpackConfig);
const middleware = webpackMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  contentBase: 'src',
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port =  process.env.PORT || config.server.port;
const host =  process.env.HOST || config.server.host;

var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({'colorize':true})
    ]
});

app.listen(port, host, function onStart(err) {
  if (err) {
    logger.error(err);
  }
  logger.info(`Listening on ${host}:${port}`);
});