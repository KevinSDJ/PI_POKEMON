const {DataTypes}=require('sequelize');


module.exports= (sequelize)=>{
   sequelize.define('users',{
       username:{
           type:DataTypes.STRING(100),
           allowNull:false,
           unique:true
       },
       email:{
           type:DataTypes.STRING(100),
           unique:true,
           allowNull:false
       }
       ,
       password:{
           type:DataTypes.INTEGER,
           allowNull:false
       },
       image:{
           type: DataTypes.TEXT,
           allowNull:true
       }
   },{timestamps:false}) 
}