import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.db";

const CustomerModel = sequelize.define("customers", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  guid: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE,
  },
  updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
  },
});

export default CustomerModel;