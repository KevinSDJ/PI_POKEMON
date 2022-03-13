const {DataTypes}=require('sequelize');
const bcrypt =require('bcrypt')

module.exports= (sequelize)=>{
   sequelize.define('users',{
       id:{
        primaryKey:true,
        type:DataTypes.UUID,
        allowNull:false,
        defaultValue:DataTypes.UUIDV4
       },
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
           type:DataTypes.STRING,
           allowNull:false
       },
       image:{
           type: DataTypes.TEXT,
           allowNull:true
       }
   },{
       timestamps:false,
       hooks:{
           beforeCreate:async (user)=>{
               if(user.password){
                   user.password= bcrypt.hashSync(user.password,10)
               }
           },
           afterUpdate:async(user)=>{
               if(user.password){
                   user.password= bcrypt.hashSync(user.password,10)
               }
           }
       }
}) 
}