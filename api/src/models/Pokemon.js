const { DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      allowNull:false,
      primaryKey:true,
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      set(value){
        this.setDataValue('id',hash(value))
      }
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    hp:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    defense:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    sprites:{
      type: DataTypes.TEXT,
      allowNull:false
    }
    ,
    attack:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    special_attack:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    special_defense:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    speed:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    height:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    weight:{
      type:DataTypes.INTEGER,
      allowNull:false
    }
   
  },{timestamps:false});
};
