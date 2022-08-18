const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('customers', {

    id :{ 
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    }, 
    email:{
       type: DataTypes.STRING,
       allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false,    
    },
    full_name:{
        type: DataTypes.STRING,
        allowNull:false,  
    },   
    billing_address:{
        type: DataTypes.STRING,
        allowNull:false,  
    },
    country:{
        type: DataTypes.STRING,
        allowNull:false,  
    },
    phone:{
        type: DataTypes.INTEGER,
        allowNull:false,  
    },
    admin:{
        type: DataTypes.BOOLEAN,
        allowNull:false
    }
  });
};