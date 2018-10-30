let sequelize = require('./db')
let UserModel = sequelize.import('./models/user')
let ItemModel = sequelize.import('./models/item')
let CartModel = sequelize.import('./models/cart')
let CartItem = sequelize.import('./models/cartitem')

UserModel.hasOne(CartModel)
CartModel.belongsTo(UserModel)
// CartModel.hasMany(ItemModel)
ItemModel.belongsToMany(CartModel, {through: CartItem})
// CartItem.hasMany(ItemModel)
// ItemModel.belongsTo(CartItem)


sequelize.sync({force:true}).then(console.log('Database and tables created'))