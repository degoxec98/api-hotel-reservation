import { Router } from "express";
import { methods as customerController } from './../controllers/customer.controller.js';

const router = Router();

router.get("/", customerController.getCustomers);
router.get("/find/:id", customerController.getCustomer);

export default router;