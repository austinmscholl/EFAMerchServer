const express = require('express');
let router = express.Router();
let sequelize = require('../db');
let User = sequelize.import('../models/user');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
require('dotenv').config()


router.post('/signup', function(req, res) {
    let email = req.body.email;
    let password = req.body.password;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let role = 'admin';

    User
        .create({
        email: email,
        passwordhash: bcrypt.hashSync(password, 10),
        firstname: firstname,
        lastname: lastname,
        role: role
        })
        
        .then(
            user => {
            user.createCart({
                userId: user.id,
                ordered:false
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


module.exports = router;