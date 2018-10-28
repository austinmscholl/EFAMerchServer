module.exports = function (sequelize, DataTypes){
<<<<<<< HEAD
    return sequelize.define('test', {
        itemName: {
            type: DataTypess.STRING,
            allowNull: false
        },
        itemPrice: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        itemDescription: {
            type: DataTypes.STRING,
            allowNull: false
        },
        itemImg: {
            type: DataTypes.BLOB,
            allowNull: false
=======
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
>>>>>>> master
        }
    })
}