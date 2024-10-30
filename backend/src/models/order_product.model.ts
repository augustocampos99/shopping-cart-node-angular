import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.db";

const OrderProductModel = sequelize.define("orders_products", {
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
  orderId: {
    field: 'order_id',
    type: DataTypes.NUMBER,
    allowNull: false
  },
  productId: {
    field: 'product_id',
    type: DataTypes.NUMBER,
    allowNull: false
  },
  quantity: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  price: {
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

export default OrderProductModel;