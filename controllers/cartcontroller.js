let express = require('express')
let router = express.Router()
let sequelize = require('../db')
let UserCart = sequelize.import('../models/cart')
validateSession = require('../middleware/validate-session')

router.post('/', (req, res) => {
    UserCart.create({})
    .then(data => res.json(data))
    .catch(err => res.send(err))

})

router.get('/:id', validateSession, (req, res) => {
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
    UserCart.findOne({
        where:{userId: req.user.id}
    })
        .then(cart => {
            cart.setItems(req.params.id)
        })
        .then(res.send('success'))

})

// router.get('/:id', validateSession, (req, res) => {
//     UserCart.findOne({
//         where: {userId: req.user.id},
//         include: [{all:true}]
//     })
//     .then(cart => {
//         res.json(cart)
//     })
//     .catch(err => res.send(err))

// })


router.put('/:id', validateSession, (req, res) => {
    UserCart.findOne({
        where:{userId: req.user.id}
    })
        .then(cart => {
            cart.setItems(req.params.id)
        })
        .then(res.send('success'))
})


// router.get('/', (req, res) => {
//     res.send('hey from cart')
// })

module.exports = router
