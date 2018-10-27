require('dotenv').config();

var user = require('./controllers/usercontroller');

const express = require('express');
const app = express();

var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync();

app.use(bodyParser.json());

// app.use(require('./middleware/headers'));
// app.use(require('./middleware/validate-session'));

app.use('/', user);

app.listen(5000,() => console.log('app is listening on port 5000...bitches'));