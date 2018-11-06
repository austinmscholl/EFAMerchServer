var user = require('./controllers/usercontroller');
let item = require('./controllers/itemcontroller')
let cart = require('./controllers/cartcontroller')


const express = require('express');
const app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json());

app.use(require('./middleware/headers'))

app.use('/auth', user);
app.use('/item', item)
app.use('/cart', cart)

require('./associations.js')

app.listen(5000,() => console.log('app is listening on port 5000..'));