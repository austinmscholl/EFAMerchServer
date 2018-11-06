module.exports = function (sequelize, DataTypes){
    return sequelize.define('stock', {
        size:{
            type:DataTypes.STRING,
            allowNull:false
        },
        quantity:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
})
}