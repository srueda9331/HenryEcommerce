"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DATABASE } = process.env;
const db = {};

let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_DATABASE,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USERNAME,
        password: DB_PASSWORD,
        logging: false,
        define: {
          timestamps: false,
          underscored: true,
        },
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
      })
    : new Sequelize(
        `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}`,
        {
          logging: false, // set to console.log to see the raw SQL queries
          native: false, // lets Sequelize know we can use pg-native for ~30% more speed
          define: {
            timestamps: false,
            underscored: true,
          },
        }
      );

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
