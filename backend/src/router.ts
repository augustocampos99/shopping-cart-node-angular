import { Router } from "express";
import customerController from "./controllers/customer.controller";
import { Express, Request, Response } from "express";

const router = Router();

router.get("/api/customer", customerController.get);
router.get("/api/customer/:guid", customerController.getByGuid);
router.post("/api/customer", customerController.create);
router.put("/api/customer", customerController.update);
router.delete("/api/customer", customerController.delete);

export default router;