
import cors from 'cors';
import * as path from 'path';
import express from 'express';
import config from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Routes from './routes/index.routes';

const port = process.env.PORT || 3001;
const staticDir = path.join('../app/');

/*
 * Express config
 */
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1', Routes);

/**
 * Mongodb database and server connection
 */
mongoose.connect(config.mongodb.uri, { useNewUrlParser: true })
  .then(() => {
    console.log(`🐵 Mongodb at ${config.mongodb.uri}`);
    app.listen(port,  () => {
      console.log(`🚀️ Server ready at http://localhost:${port}`);
    });
  }, () => {
    throw new Error('Mongodb is not running yet')
  }
);

/**
 * HTML build
 * */
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(staticDir));
  app.get('*', (req, res) => {
    res.sendFile(path.join(staticDir, 'index.html'));
  });
}
