let express = require('express')
let router = express.Router()
let sequelize = require('../db')
let CartItem = sequelize.import('../models/cartitem')
// let ItemModel = sequelize.import('../models/item')

router.post('/:cart_id/:item_id', (req, res) => {
    CartItem.create({
        cartId: req.params.cart_id,
        itemId: req.params.item_id
    })
    .then(data => res.json(data))
})

router.get('/:id', (req, res) => {
    CartItem.findAll({
        where: {cartId: req.params.id}, 
        include: ['item']
    })
        .then(data => res.json(data))
})
module.exports = router