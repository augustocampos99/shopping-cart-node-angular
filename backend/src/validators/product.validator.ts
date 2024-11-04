import { body } from "express-validator";

const productValidator = [
  body("title")
  .exists({ checkFalsy: true })
  .withMessage("title is required")
  .isString()
  .withMessage("title should be string"),

  body("description")
  .exists({ checkFalsy: true })
  .withMessage("description is required")
  .isString()
  .withMessage("description should be string"),

  body("price")
  .exists({ checkFalsy: true })
  .withMessage("price is required")
  .isNumeric()
  .withMessage("price should be number"),
];

export default productValidator;
