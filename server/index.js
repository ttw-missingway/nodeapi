const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const dotenv = require('dotenv');
dotenv.config();

//db
mongoose
.set('strictQuery', false)
.connect(process.env.MONGO_URI)
.then(() => console.log('DB Connected'))
.catch((err) => console.log("DB ERROR => ", err));

// bring in routes
const postRoutes = require('./routes/post');

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/", postRoutes);


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Node Js API is listening on port: ${port}`);
});