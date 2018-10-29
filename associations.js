let sequelize = require('./db')
let UserModel = sequelize.import('./models/user')
let ItemModel = sequelize.import('./models/item')
let CartModel = sequelize.import('./models/cart')

UserModel.belongsToMany(ItemModel, {through: CartModel})
UserModel.hasOne(CartModel)
CartModel.belongsTo(UserModel)
CartModel.hasMany(ItemModel)
ItemModel.belongsTo(CartModel)

sequelize.sync().then(console.log('Database and tables created'))