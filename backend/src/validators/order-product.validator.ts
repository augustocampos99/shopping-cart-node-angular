import { body } from "express-validator";

const orderProductValidator = [
  body("orderId")
  .exists({ checkFalsy: true })
  .withMessage("orderId is required")
  .isNumeric()
  .withMessage("orderId should be number"),

  body("productId")
  .exists({ checkFalsy: true })
  .withMessage("productId is required")
  .isNumeric()
  .withMessage("productId should be number"),

  body("quantity")
  .exists({ checkFalsy: true })
  .withMessage("quantity is required")
  .isNumeric()
  .withMessage("quantity should be number"),

  body("price")
  .exists({ checkFalsy: true })
  .withMessage("price is required")
  .isNumeric()
  .withMessage("price should be number"),
];

export default orderProductValidator;
