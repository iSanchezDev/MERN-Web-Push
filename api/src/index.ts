
import cors from 'cors';
import * as path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Routes from './routes/index.routes';
import config from './environment/config';

let mongoURI = config.mongodb.uri;
const port = process.env.PORT || 3001;
const staticDir = path.join(__dirname, '../../app/dist/');

/*
 * Express config
 */
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1', Routes);

/**
 * HTML build
 * */
if (process.env.NODE_ENV === 'production') {
  mongoURI = config.mongodb.uriExternal;
  app.use(express.static(staticDir));
  app.get('*', (req, res) => {
    res.sendFile(path.join(staticDir, 'index.html'));
  });
}

/**
 * Mongodb database and server connection
 */
mongoose.connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log(`🐵 Mongodb at ${config.mongodb.uri}`);
    app.listen(port,  () => {
      console.log(`🚀️ Server ready at http://localhost:${port}`);
    });
  }, () => {
    throw new Error('Mongodb is not running yet')
  }
);

