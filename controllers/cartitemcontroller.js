let express = require('express')
let router = express.Router()
let sequelize = require('../db')
let CartItem = sequelize.import('../models/cartitem')
let validateSession = require('../middleware/validate-session')

// adds an item to a user's cart
router.get('/getcartitem/:id', (req, res) => {
    CartItem
        .findOne({where: {id: req.params.id}})
        .then(item => res.json(item))
})

router.post('/:cart_id/:item_id', validateSession, (req, res) => {
    CartItem
        .create({
            cartId: req.params.cart_id,
            itemId: req.params.item_id,
            size: req.body.size,
            quantity: req.body.quantity
        })
        .then(item => res.json(item))
})

router.put('/update/:id', (req, res) => {
    CartItem
        .update(req.body, {where: {id: req.params.id}})
        .then(data => res.json(data))
})



module.exports = router