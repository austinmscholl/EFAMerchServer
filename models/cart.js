module.exports = function (sequelize, DataTypes){
    let Cart = sequelize.define('cart', {
        itemId:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    Cart.associate = function(models) {
        Cart.belongsTo(models.User);
        Cart.hasMany(models.Item)
    }

    return Cart;
}