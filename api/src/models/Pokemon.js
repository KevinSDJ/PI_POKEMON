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
    health:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    defense:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    sprite:{
      type: DataTypes.STRING(100),
      allowNull:true
    }
    ,
    strength:{
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
    },
    type:{
      type:DataTypes.STRING(100),
      allowNull:true
    }
   
  },{timestamps:false});
};
