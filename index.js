require('dotenv').config();

var user = require('./controllers/usercontroller');

const express = require('express');
const app = express();
<<<<<<< HEAD
let Item = require('./controllers/itemcontroller');
let user = require('./controllers/usercontroller');
let sequelize = require('./db')
let bodyParser = require('body-parser')


sequelize.sync()
app.use(require('./middleware/headers'));
app.use(bodyParser.json());

app.use('/', user);
app.use('/item', Item)
=======
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync();

app.use(bodyParser.json());
>>>>>>> development

app.use(require('./middleware/headers'))

app.use('/', user);

app.listen(5000,() => console.log('app is listening on port 5000...bitches'));