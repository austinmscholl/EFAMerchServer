require('dotenv').config()
let express = require('express')
let router = express.Router()
let Item = require('../db').import('../models/item')
let multer = require('multer')
let cloudinary = require('cloudinary')
let cloudinaryStorage = require('multer-storage-cloudinary')

// let validateSession = require('../middleware/validate-session')

// configures cloudinary based on values found in our .env file
cloudinary.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.CLOUDAPI,
    api_secret: process.env.CLOUDSECRET
})

// assigns the variable 'storage' the cloudinaryStorage configuration
let storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "EFAMerchAssets",
    allowedFormats: ['jpg', 'jpeg', 'png']
})

// uses multer to parse uploaded data
let parser = multer({storage:storage})

// adds an item to the database
// parser.single parses a single file
router.post('/additem', parser.single('itemImg'), (req, res) => {
    console.log(req.file)
    Item   
        .create({
            itemName: req.body.itemName,
            itemPrice: req.body.itemPrice,
            category: req.body.category,
            gender: req.body.gender,
            itemDescription: req.body.itemDescription,
            itemImg: req.file.url
        })
        .then(item=> res.json(item))
})

// GETS all items
router.get('/getitems', (req, res) => {
    Item
        .findAll()
        .then(data => res.json(data))
})

// GETS all accessories
router.get('/getaccessories', (req, res) => {
    Item
        .findAll({where: {category: 'accessories'}})
        .then(items => res.json(items))
})

// GETS items based on gender, or where gender is 'neutral'
router.get('/gender/:gender', (req, res) => {
    Item
        .findAll( {where: {gender:[req.params.gender, 'neutral'] }})
        .then(item => res.json(item))
})

// GETS items based on gender and category
router.get('/genderCat/:gender/:category', (req, res) => {
    Item
        .findAll( {where: {gender:req.params.gender, category:req.params.category }})
        .then(item => res.json(item))
})

router.get('/oneitem/:id', (req,res) => {
    Item
        .findOne({
            where:{id:req.params.id}
        })
        .then(item => res.json(item))
})

router.put('/updateone/:id', (req, res) => {
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
