const express = require('express');
const app = express();
let Item = require('./controllers/itemcontroller');
let sequelize = require('./db')
let bodyParser = require('body-parser')

sequelize.sync()

app.use('/item', Item)

app.listen(5000,() => console.log('app is listening on port 5000...bitches'));