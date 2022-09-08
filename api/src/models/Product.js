"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {}
  }
  Product.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      weight: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      height: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      ram: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      storage: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      camera: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      display: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      batery: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      brands: {
        type: DataTypes.ENUM(["Samsung", "Apple", "Huawei", "Xiaomi", "Asus"]),
        allowNull: false,
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Product",
      paranoid: true,
      timestamps: true,
    }
  );
  return Product;
};
