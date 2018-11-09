var user = require('./controllers/usercontroller');
let item = require('./controllers/itemcontroller')
let cart = require('./controllers/cartcontroller')
let stock = require('./controllers/stockcontroller')


const express = require('express');
const app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json());

app.use(require('./middleware/headers'))

app.use('/auth', user);
app.use('/item', item)
app.use('/cart', cart)
app.use('/stock', stock)

require('./associations.js')

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
})

app.listen(5000,() => console.log('app is listening on port 5000..'));