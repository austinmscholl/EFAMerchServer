var user = require('./controllers/usercontroller');
let item = require('./controllers/itemcontroller')

const express = require('express');
const app = express();
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync();

app.use(bodyParser.json());

app.use(require('./middleware/headers'))

app.use('/', user);
app.use('/item', item)

app.listen(5000,() => console.log('app is listening on port 5000...bitches'));