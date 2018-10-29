var user = require('./controllers/usercontroller');
let item = require('./controllers/itemcontroller')
<<<<<<< HEAD
let cart = require('./controllers/cartcontroller');
=======
let cart = require('./controllers/cartcontroller')
let cartitem = require('./controllers/cartitemcontroller')
>>>>>>> development

const express = require('express');
const app = express();
var bodyParser = require('body-parser');

<<<<<<< HEAD
sequelize.sync({force: true}); //{force: true}
=======
>>>>>>> development

app.use(bodyParser.json());

app.use(require('./middleware/headers'))

<<<<<<< HEAD
app.use('/', user);
app.use('/item', item);
app.use('/cart', cart);
=======
app.use('/user', user);
app.use('/item', item)
app.use('/cart', cart)
app.use('/cartitem', cartitem)

require('./associations.js')
>>>>>>> development

app.listen(5000,() => console.log('app is listening on port 5000...bitches'));