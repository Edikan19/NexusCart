const { DataTypes } = require('sequelize');
const { sequelize } = require('../app');
const User = require('./User');

const Cart = sequelize.define('Cart', {
  userId: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: 'id' } },
  items: { type: DataTypes.JSON, allowNull: false, defaultValue: [] },  
  updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

User.hasMany(Cart, { foreignKey: 'userId' });
Cart.belongsTo(User, { foreignKey: 'userId' });

module.exports = Cart;