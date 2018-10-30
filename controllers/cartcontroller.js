let express = require('express')
let router = express.Router()
let sequelize = require('../db')
let UserCart = sequelize.import('../models/cart')
validateSession = require('../middleware/validate-session')
// let ItemModel = sequelize.import('../models/item')

router.post('/', (req, res) => {
    UserCart.create({})
    .then(data => res.json(data))
})

router.put('/:id', validateSession, (req, res) => {
    UserCart.findOne({where: {id: req.params.id}})
    // .then(cart => {
    //     cart.setUser(req.user.id)
    // })
    .then(res => res.send('success'))
})

router.get('/', validateSession, (req, res) => {
    UserCart.findAll({
        include: ['items']
    })
        .then(data => res.json(data))
})

// router.get('/', (req, res) => {
//     res.send('hey from cart')
// })

module.exports = router