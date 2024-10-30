import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.db";

const OrderModel = sequelize.define("orders", {
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
  customerId: {
    field: 'customer_id',
    type: DataTypes.NUMBER,
    allowNull: false
  },
  totalPrice: {
    field: 'total_price',
    type: DataTypes.NUMBER,
    allowNull: false
  },
  status: {
    type: DataTypes.NUMBER,
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

export default OrderModel;