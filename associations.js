let sequelize = require('./db')
let UserModel = sequelize.import('./models/user')
let ItemModel = sequelize.import('./models/item')
let CartModel = sequelize.import('./models/cart')
let CartItem = sequelize.import('./models/cartitem')

UserModel.hasOne(CartModel)
CartModel.belongsTo(UserModel)
// CartModel.hasMany(ItemModel)
CartModel.belongsToMany(ItemModel, {as:'cart', through: CartItem})
ItemModel.belongsToMany(CartModel, {as:'item', through: CartItem})
// CartItem.hasMany(ItemModel)
// ItemModel.belongsTo(CartItem)


sequelize.sync().then(console.log('Database and tables created'))