import { body } from "express-validator";

const orderValidator = [
  body("customerId")
  .exists({ checkFalsy: true })
  .withMessage("customerId is required")
  .isNumeric()
  .withMessage("customerId should be number"),

  body("totalPrice")
  .exists({ checkFalsy: true })
  .withMessage("totalPrice is required")
  .isNumeric()
  .withMessage("totalPrice should be number"),

  body("status")
  .exists({ checkFalsy: true })
  .withMessage("status is required")
  .isNumeric()
  .withMessage("status should be number"),
];

export default orderValidator;
