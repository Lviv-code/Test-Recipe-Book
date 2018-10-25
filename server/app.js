const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const recipeRoutes = require('./api/routes/recipe');

app.use(cors());


// mongoDb
mongoose.connect('mongodb://admin:qwe123@ds223063.mlab.com:23063/lviv-code', {
    useNewUrlParser: true
});

// routes
app.use('/recipes', recipeRoutes);

// errors
app.use((req, res, next)=>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error: {
            massage: error.message
        }
    })
})

module.exports = app;