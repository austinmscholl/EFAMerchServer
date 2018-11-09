let express = require('express')
let router = express.Router()
let sequelize = require('../db')
let UserCart = sequelize.import('../models/cart')
validateSession = require('../middleware/validate-session')

router.get('/', validateSession, (req, res) => {

        UserCart.findOne({
        where: {userId: req.user.id},
        include: [{all:true}]
    })
    .then(cart => {
        res.json(cart)
    })
    .catch(err => res.send(err))
})

router.put('/:id', validateSession, (req, res) => {
    console.log(req.user.id)
    
    UserCart.findOne({
        where:{userId: req.user.id}
    })
        .then(cart => {
            cart.addItems(req.params.id)
        })
        .then(res.send('success'))
})

router.put('/order/success', validateSession, (req, res) => {
    UserCart
        .update({ordered: true},{
            where:{userId:req.user.id}
        })
        .then(res.send('success'))
})

router.put('/addstock/:id', validateSession, (req, res) =>{
    UserCart.findOne({
        where:{userId: req.user.id}
    })
        .then(cart => {
            cart.createCartstock({
                cartId: cart.id,
                itemId:req.params.id,
                size:req.body.size,
                quantity:req.body.quantity
            })
        })
        .then(data => res.json(data))
})



router.delete('/delete/:id', validateSession, (req, res) => {
    console.log(req.user.id)

    UserCart.findOne({
        where:{userId: req.user.id}
    })
        .then(cart => {
            cart.removeItem(req.params.id)
        })
        .then(res.send('success'))
})

module.exports = router
