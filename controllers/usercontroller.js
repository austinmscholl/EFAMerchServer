const express = require('express');
let router = express.Router();
let sequelize = require('../db');
let User = sequelize.import('../models/user');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let validateSession = require('../middleware/validate-session')
require('dotenv').config()

// POSTs a User to the database
// assigns a role of 'admin' by default
// uses a magic method to createCart for a User
router.post('/signup', function(req, res) {
    let email = req.body.email;
    let password = req.body.password;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let role = 'admin';
    let cart = true

    User
        .create({
        email: email,
        passwordhash: bcrypt.hashSync(password, 10),
        firstname: firstname,
        lastname: lastname,
        role: role,
        userCart: cart,
        })
        
        .then(
            user => {
            user.createCart({
                userId: user.id
            })
            let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn:
            60*60*24});
            res.json({
                user: user,
                message: 'created',
                sessionToken: token
            });
        })
        },
        function createError(err) {
            res.send(500, err.message);
        }
    );

router.post('/login', function(req, res) {
    User.findOne( { where: { email: req.body.email } } ).then(
        function(user) {
            if( user) {
                bcrypt.compare(req.body.password, user.passwordhash, function
                (err, matches) {
                    if (matches) {
                        let token = jwt.sign({id: user.id}, process.env.JWT_SECRET,
                          {expiresIn: 60*60*24 });
                        res.json({
                            user: user,
                            message: "successfully authenticated",
                            sessionToken: token
                        });
                    } else {
                        res.status(502).send({ error: "you failed, yo" });
                    }
                });
            } else {
                res.status(500).send({ error: "failed to authenticate" });
            }
        },
        function(err) {
            res.status(501).send({ error: "you failed, yo" });
        }
    );
});

router.get('/findUser', validateSession, (req, res) => {
    User
        .findOne({
            where:{id:req.user.id},
            include:[{all:true}]
        })
        .then(user => res.json(user))
})


router.put('/createcart', validateSession, (req, res) => {
    User
        .findOne({where:{id: req.user.id}})
        .then(user => {
            user.createCart({userId: user.id})
        })
        .then(res.send('Success'))
})

module.exports = router;