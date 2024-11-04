import { body } from "express-validator";

const customerValidator = [
  body("name")
  .exists({ checkFalsy: true })
  .withMessage("name is required")
  .isString()
  .withMessage("name should be string"),

  body("email")
  .exists({ checkFalsy: true })
  .withMessage("email is required")
  .isString()
  .withMessage("email should be string"),

  body("phone")
  .exists({ checkFalsy: true })
  .withMessage("phone is required")
  .isString()
  .withMessage("phone should be string"),
];

export default customerValidator;
