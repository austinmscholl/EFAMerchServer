module.exports = function (sequelize, DataTypes){
    return sequelize.define('cartitem', {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
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