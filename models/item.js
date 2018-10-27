module.exports = function (sequelize, DataTypes){
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
        }
    })
}