
/**
 * app.js
 */
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoclient from 'mongodb';
import webpackDevServer from './webpack/dev-server';
import routes from './routes';

// Express app setup
const app = express();
const MongoClient = mongoclient.MongoClient;

// Mongo Connect
const uri = 'mongodb://tho_mongo_1:NlSbvOU6pQzbBBx6@cluster0-shard-00-02-8j4y5.mongodb.net:27017/admin';
MongoClient.connect(uri, (err, client) => {
  console.log(client);
  const collection = client.db('rajs').collection('user');
  console.log(collection);
  // perform actions on the collection object
  client.close();
});

// use dotenv
dotenv.config({
  silent: true,
});

// view engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

// include webpack-dev-server for development only
if (process.env.NODE_ENV !== 'production') {
  webpackDevServer(app);
}

// logger
app.use(logger('combined'));
// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// cookie parser
app.use(cookieParser());

// serve static files from 'public'
app.use(express.static(path.join(__dirname, './public')));

// use routes
app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: app.get('env') === 'development' ? err : {},
  });
  next();
});

export default app;
