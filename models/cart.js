module.exports = function (sequelize, DataTypes){
    return sequelize.define('cart', {
        ordered:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
})
}