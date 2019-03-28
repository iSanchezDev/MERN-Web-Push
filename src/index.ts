
import cors from 'cors';
import express from 'express';
import config from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Routes from './routes/index.routes';

const port = process.env.PORT || 3001;

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
