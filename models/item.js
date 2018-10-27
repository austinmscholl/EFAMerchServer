module.exports = function (sequelize, DataTypes){
    return sequelize.define('item', {
        itemName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        itemPrice: {
            type: DataTypes.STRING,
            allowNull: false
        },
        itemDescription:{
            type: DataTypes.STRING,
            allowNull:false
        },
        itemImg:{
            type: DataTypes.BLOB,
            allowNull:false
        }
    })
}