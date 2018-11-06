let express = require('express')
let router = express.Router()
let sequelize = require('../db')
let StockModel = sequelize.import('../models/stock')

router.put('/:id/:stock_id', (req, res) => {
    StockModel
        .update(req.body, {where: {id:req.params.stock_id, itemId:req.params.id}})
        .then(stock => res.json(stock))
})


module.exports = router