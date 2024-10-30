import { Router } from "express";
import customerController from "./controllers/customer.controller";
import productController from "./controllers/product.controller";
import orderController from "./controllers/order.controller";
import orderProductController from "./controllers/order_product.controller";

const router = Router();

router.get("/api/customer", customerController.get);
router.get("/api/customer/:guid", customerController.getByGuid);
router.post("/api/customer", customerController.create);
router.put("/api/customer/:guid", customerController.update);
router.delete("/api/customer/:guid", customerController.delete);

router.get("/api/product", productController.get);
router.get("/api/product/:guid", productController.getByGuid);
router.post("/api/product", productController.create);
router.put("/api/product/:guid", productController.update);
router.delete("/api/product/:guid", productController.delete);

router.get("/api/order", orderController.get);
router.get("/api/order/:guid", orderController.getByGuid);
router.post("/api/order", orderController.create);
router.put("/api/order/:guid", orderController.update);
router.delete("/api/order/:guid", orderController.delete);

router.get("/api/order-product", orderProductController.get);
router.get("/api/order-product/:guid", orderProductController.getByGuid);
router.post("/api/order-product", orderProductController.create);
router.put("/api/order-product/:guid", orderProductController.update);
router.delete("/api/order-product/:guid", orderProductController.delete);

export default router;