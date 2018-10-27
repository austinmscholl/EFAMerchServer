let express = require('express')
let router = express.Router()
let Item = require('../db').import('../models/item')
// let validateSession = require('../middleware/validate-session')
// Item.sync({force:true})

router.post('/additem', (req, res) => {
    Item   
        .create({
            itemName: req.body.itemName,
            itemPrice: req.body.itemPrice,
            itemDescription: req.body.itemDescription,
            itemImg: req.body.itemImg
        })
        .then(item=> res.json(item))
})

router.get('/getitems', (req, res) => {
    Item
        .findAll()
        .then(data => res.json(data))
})

router.put('/:id', (req, res) => {
    Item
        .update(req.body, {where: {id:req.params.id}})
        .then(item => res.json(item))

})

router.delete('/:id', (req, res) => {
    Item
        .destroy({where:{id: req.params.id}})
        .then(item => res.json(item))
})

module.exports = router
