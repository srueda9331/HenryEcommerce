const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('orders', {

    id :{ 
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    }, 
    customer_id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },
    ammount:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    order_address:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    order_email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    order_date:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    order_status:{
        type: DataTypes.ENUM(['Realizado', 'Pago confirmado', 'Pedido empaquetado','Pedido Enviado']),
        allowNull: false,
    },
  });
};