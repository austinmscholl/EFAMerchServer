let express = require('express')
let router = express.Router()
let Item = require('../db').import('../models/item')
// let validateSession = require('../middleware/validate-session')
// Item.sync({force:true})

router.post('/addcart', (req, res) => {
    Cart   
        .create({
            itemId: req.body.itemId
        })
        .then(item=> res.json(item))
})

router.get('/getcart', (req, res) => {
    Item
        .findAll()
        .then(data => res.json(data))
})

router.delete('/:cartid', (req, res) => {
    Item
        .destroy({where:{id: req.params.id}})
        .then(item => res.json(item))
})

module.exports = router
