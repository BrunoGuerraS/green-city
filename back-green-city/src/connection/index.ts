import mongoose from 'mongoose';
import config from '../config';

const MONGODB_URI = `mongodb://${config.dbHost}:${config.dbPort}/${config.dbName}`;
mongoose
.connect(MONGODB_URI)
.then(() => {console.log('Database connected')})
.catch((err) => {console.log('Database connection error', err)});