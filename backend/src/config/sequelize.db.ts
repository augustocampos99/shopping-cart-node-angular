import { Sequelize } from "sequelize";

const sequelize = new Sequelize("simple_shopping_cart_db", "root", "", {dialect: "mysql", host: "localhost"});
 
export default sequelize;