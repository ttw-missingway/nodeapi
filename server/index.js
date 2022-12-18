import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import expressValidator from 'express-validator';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();

//db
mongoose
.set('strictQuery', false)
.connect(process.env.MONGO_URI)
.then(() => console.log('DB Connected'))
.catch((err) => console.log("DB ERROR => ", err));

// bring in routes
// const postRoutes = require('./routes/post');

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(expressValidator());
app.use("/api", authRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Node server is listening on port: ${port}`);
});