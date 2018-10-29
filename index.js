var user = require('./controllers/usercontroller');
let item = require('./controllers/itemcontroller')
let cart = require('./controllers/cartcontroller')
let cartitem = require('./controllers/cartitemcontroller')

const express = require('express');
const app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json());

app.use(require('./middleware/headers'))

app.use('/user', user);
app.use('/item', item)
app.use('/cart', cart)
app.use('/cartitem', cartitem)

require('./associations.js')

app.listen(5000,() => console.log('app is listening on port 5000...bitches'));