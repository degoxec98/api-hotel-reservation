import express from "express";
// Routes
import reservationsRoutes from "./routes/reservation.routes.js";
import customersRoutes from "./routes/customers.routes.js";
import roomsRoutes from "./routes/rooms.routes.js";

const app = express();

// Settings
app.set("port", 5000);

// Middlewares
app.use(express.json());

// Routes
app.use("/api/reservations", reservationsRoutes);
app.use("/api/customers", customersRoutes);
app.use("/api/rooms", roomsRoutes);

export default app;