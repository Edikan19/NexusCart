const sequelize = require('../../config/db');
const User = require('./User');
const Cart = require('./Cart');

User.hasOne(Cart, { foreignKey: 'userId' });
Cart.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
  sequelize,
  User,
  Cart,
};
