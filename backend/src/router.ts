import { Router } from "express";
import CustomerController from "./controllers/customer.controller";
import ProductController from "./controllers/product.controller";
import OrderController from "./controllers/order.controller";
import OrderProductController from "./controllers/order_product.controller";
import OrderService from "./services/order.service";
import ProductService from "./services/product.service";
import OrderProductService from "./services/order_product.service";
import CustomerService from "./services/customer.service";


// Dependency Injection
const customerController = new CustomerController(new CustomerService());
const productController = new ProductController(new ProductService());
const orderController = new OrderController(new OrderService(), new CustomerService());
const orderProductController = new OrderProductController(new OrderProductService(), new ProductService(), new OrderService());

// Validators
import productValidator from "./validators/product.validator";
import customerValidator from "./validators/customer.validator";
import orderValidator from "./validators/order.validator";
import orderProductValidator from "./validators/order-product.validator";
const router = Router();

router.get("/api/customer", customerController.get.bind(customerController));
router.get("/api/customer/:guid", customerController.getByGuid.bind(customerController));
router.post("/api/customer", customerValidator, customerController.create.bind(customerController));
router.put("/api/customer/:guid", customerValidator, customerController.update.bind(customerController));
router.delete("/api/customer/:guid", customerController.delete.bind(customerController));

router.get("/api/product", productController.get.bind(productController));
router.get("/api/product/:guid", productController.getByGuid.bind(productController));
router.post("/api/product", productValidator, productController.create.bind(productController));
router.put("/api/product/:guid", productValidator, productController.update.bind(productController));
router.delete("/api/product/:guid", productController.delete.bind(productController));

router.get("/api/order", orderController.get.bind(orderController));
router.get("/api/order/:guid", orderController.getByGuid.bind(orderController));
router.post("/api/order", orderValidator, orderController.create.bind(orderController));
router.put("/api/order/:guid", orderValidator, orderController.update.bind(orderController));
router.delete("/api/order/:guid", orderController.delete.bind(orderController));

router.get("/api/order-product", orderProductController.get.bind(orderProductController));
router.get("/api/order-product/:guid", orderProductController.getByGuid.bind(orderProductController));
router.post("/api/order-product", orderProductValidator, orderProductController.create.bind(orderProductController));
router.put("/api/order-product/:guid", orderProductValidator, orderProductController.update.bind(orderProductController));
router.delete("/api/order-product/:guid", orderProductController.delete.bind(orderProductController));

export default router;