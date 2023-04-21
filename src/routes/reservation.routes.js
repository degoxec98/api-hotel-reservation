import { Router } from "express";
import { methods as reservationController } from './../controllers/reservation.controller.js';

const router = Router();

router.get("/", reservationController.getReservations);
router.get("/find/:id", reservationController.getReservation);
router.post("/add", reservationController.addReservation);
router.put("/update/:id", reservationController.updateReservation);
router.put("/update/status/:id", reservationController.updateStatusReservation);
router.delete("/delete/:id", reservationController.deleteReservation);

export default router;