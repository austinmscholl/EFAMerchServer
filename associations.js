let sequelize = require('./db')
let UserModel = sequelize.import('./models/user')
let ItemModel = sequelize.import('./models/item')
let CartModel = sequelize.import('./models/cart')
let CartItem = sequelize.import('./models/cartitem')
let StockModel = sequelize.import('./models/stock')

// User hasOne Cart 
// adds attribute 'userId' to the Cart model
UserModel.hasOne(CartModel)

// Cart belongsTo User 
// UserId is added onto Cart model
CartModel.belongsTo(UserModel)

// creates a new model called CartItem, aliased as: 'items'
// defining "through" is required
// allows Cart to have many Items as 'items' through CartItem model(table)
CartModel.belongsToMany(ItemModel, {as: 'items', through: CartItem})

// adds attribute cartId to Stock model as cartstock
// allows one cart to have many stock
CartItem.hasMany(StockModel, {as: 'cartstock'})

// Stock belongsTo Cart
// CartId is added onto Stock model
StockModel.belongsTo(CartItem)


sequelize.sync().then(console.log('Database and tables created'))