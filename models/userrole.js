'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Users, {
        foreignKey:"user_Id"
      })
      console.log(models)
      this.belongsTo(models.Role, {
        foreignKey:"role_Id"
      })
    }
  }
  UserRole.init({
    user_Id: DataTypes.INTEGER,
    role_Id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserRole',
  });
  return UserRole;
};