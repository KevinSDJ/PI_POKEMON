const { DataTypes} = require('sequelize');




module.exports = (sequelize) => {
    sequelize.define('type', {
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      }
    },{timestamps:false});
  };