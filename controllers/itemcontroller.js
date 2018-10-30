require('dotenv').config()
let express = require('express')
let router = express.Router()
let Item = require('../db').import('../models/item')
let multer = require('multer')
let cloudinary = require('cloudinary')
let cloudinaryStorage = require('multer-storage-cloudinary')
// let validateSession = require('../middleware/validate-session')
// Item.sync({force:true})

cloudinary.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.CLOUDAPI,
    api_secret: process.env.CLOUDSECRET
})

let storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "EFAMerchAssets",
    allowedFormats: ['jpg', 'jpeg', 'png']
})

let parser = multer({storage:storage})

// router.post('/addpic', parser.single('image'), (req,res) => {
//     console.log(req.file.url)
// })

router.post('/additem', parser.single('itemImg'), (req, res) => {
    console.log(req.file)
    Item   
        .create({
            itemName: req.body.itemName,
            itemPrice: req.body.itemPrice,
            category: req.body.category,
            itemDescription: req.body.itemDescription,
            itemImg: req.file.url
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
