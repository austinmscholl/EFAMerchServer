module.exports = function (sequelize, DataTypes){
    return sequelize.define('cartstock', {
        itemId:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        quantity:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        size:{
            type:DataTypes.STRING,
            allowNull:false
        }
})
}