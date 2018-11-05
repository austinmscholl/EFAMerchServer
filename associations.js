let sequelize = require('./db')
let UserModel = sequelize.import('./models/user')
let ItemModel = sequelize.import('./models/item')
let CartModel = sequelize.import('./models/cart')
let CartItem = sequelize.import('./models/cartitem')

UserModel.hasOne(CartModel)
CartModel.belongsTo(UserModel)
CartModel.belongsToMany(ItemModel, {as: 'items', through: CartItem})
// CartModel.hasMany(ItemModel)




sequelize.sync().then(console.log('Database and tables created'))

