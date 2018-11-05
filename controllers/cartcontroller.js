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
module.exports = router
