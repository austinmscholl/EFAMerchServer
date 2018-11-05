// const jwt = require('jsonwebtoken')
// const User = require('../db').import('../models/user')

// const validateSession = (req, res, next) => {
//     const token = req.headers.authorization
//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//         if (!err && decoded) {
//             User.findOne({ where: { id: decoded.id }})
//                 .then(user => {
//                     if(!user) throw 'err'
//                     req.user = user
//                     next()
//                 }) 
//                 .catch(err => next(err))
//         } else {
//             req.errors = err 
//             next()
//         }
//     })
// }

// module.exports = validateSession

let jwt = require('jsonwebtoken')
let sequelize = require('../db')
let User = sequelize.import('../models/user')

let validateSession = (req, res, next) => {
    let sessionToken = req.headers.authorization
    console.log(sessionToken)

    if(!sessionToken){
        return res.status(403).send({ auth: false, message: 'no token provided'})
    } else {
        jwt.verify(sessionToken, process.env.JWT_SECRET, (err, decoded) => {
            if(decoded){
                User.findOne({where: {id: decoded.id}})
                    .then(user => {
                        req.user = user
                        next()
                    },
                    () => {
                        res.status(401).send({error: 'Not authorized'})
                    })
            }else{
                res.status(400).send({error: 'Not authorized'})
            }
        })
    }
}

module.exports = validateSession