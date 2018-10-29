let express = require('express')
let router = express.Router()
let sequelize = require('../db')
let UserCart = sequelize.import('../models/cart')
validateSession = require('../middleware/validate-session')
// let ItemModel = sequelize.import('../models/item')

router.post('/', validateSession, (req, res) => {
    UserCart.create({
        userId: req.user.id
    })
    .then(data => res.json(data))
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