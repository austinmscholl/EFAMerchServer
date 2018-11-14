
module.exports = function (sequelize, DataTypes) {
    let User =  sequelize.define('user', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        passwordhash: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userCart:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    })


    return User;
}
