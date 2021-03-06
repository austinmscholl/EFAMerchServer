const Sequelize = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize(
    process.env.DATABASE_URL || `postgresql://postgres:${encodeURIComponent(process.env.PASS)}@localhost/efaMerchServer`
    , {
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(() => console.log('postgres db is connected'))
    .catch(err => console.log(err))


module.exports = sequelize
