import { Router } from "express";
import customerController from "./controllers/customer.controller";
import productController from "./controllers/product.controller";
import orderController from "./controllers/order.controller";
import orderProductController from "./controllers/order_product.controller";

import productValidator from "./validators/product.validator";
import customerValidator from "./validators/customer.validator";
import orderValidator from "./validators/order.validator";
import orderProductValidator from "./validators/order-product.validator";

const router = Router();

router.get("/api/customer", customerController.get);
router.get("/api/customer/:guid", customerController.getByGuid);
router.post("/api/customer", customerValidator, customerController.create);
router.put("/api/customer/:guid", customerValidator, customerController.update);
router.delete("/api/customer/:guid", customerController.delete);

router.get("/api/product", productController.get);
router.get("/api/product/:guid", productController.getByGuid);
router.post("/api/product", productValidator, productController.create);
router.put("/api/product/:guid", productValidator, productController.update);
router.delete("/api/product/:guid", productController.delete);

router.get("/api/order", orderController.get);
router.get("/api/order/:guid", orderController.getByGuid);
router.post("/api/order", orderValidator, orderController.create);
router.put("/api/order/:guid", orderValidator, orderController.update);
router.delete("/api/order/:guid", orderController.delete);

router.get("/api/order-product", orderProductController.get);
router.get("/api/order-product/:guid", orderProductController.getByGuid);
router.post("/api/order-product", orderProductValidator, orderProductController.create);
router.put("/api/order-product/:guid", orderProductValidator, orderProductController.update);
router.delete("/api/order-product/:guid", orderProductController.delete);

export default router;