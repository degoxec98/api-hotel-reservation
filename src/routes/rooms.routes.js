import { Router } from "express";
import { methods as roomController } from './../controllers/room.controller.js';

const router = Router();

router.get("/", roomController.getRooms);
router.get("/find/:id", roomController.getRoom);

export default router;