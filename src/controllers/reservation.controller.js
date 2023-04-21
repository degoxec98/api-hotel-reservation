import { getConnection } from './../database/database.js';

let status_reservation = ["Pendiente", "Pagado", "Eliminado"];

const getReservations = async(req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM reservation");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getReservation = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM reservation WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addReservation = async (req, res) => {
    try {
        const { room_id, customer_id, status, amount_paid, checkin_date, checkout_date, payment_method } = req.body;

        if (room_id === undefined || customer_id === undefined || amount_paid === undefined || checkin_date === undefined ||
            checkout_date === undefined || payment_method === undefined || status === undefined) {
                res.status(400).message({ message: "Bad Request. Please fill all field." });
        } else if (!(status_reservation.includes(status))) {
            res.status(400).message({ message: "Bad Request. Please enter a valid status." });
        }

        const created_at = new Date().toISOString().slice(0, 10);
        const updated_at = new Date().toISOString().slice(0, 10);

        const reservation = { room_id, customer_id, status, amount_paid, checkin_date, checkout_date, payment_method, created_at, updated_at };
        const connection = await getConnection();
        await connection.query("INSERT INTO reservation SET ?", reservation);
        res.json({ message: "Reservation added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateReservation = async (req, res) => {
    try {
        const { id } = req.params;
        const { room_id, customer_id, status, amount_paid, checkin_date, checkout_date, payment_method } = req.body;

        if (room_id === undefined || customer_id === undefined || amount_paid === undefined || checkin_date === undefined ||
            checkout_date === undefined || payment_method === undefined || status === undefined) {
                res.status(400).message({ message: "Bad Request. Please fill all field." });
        } else if (!(status_reservation.includes(status))) {
            res.status(400).message({ message: "Bad Request. Please enter a valid status." });
        }

        const updated_at = new Date().toISOString().slice(0, 10);

        const reservation = { room_id, customer_id, status, amount_paid, checkin_date, checkout_date, payment_method, updated_at };
        const connection = await getConnection();
        const result = await connection.query("UPDATE reservation SET ? WHERE id = ?", [reservation, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateStatusReservation = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if ( status === undefined) {
                res.status(400).message({ message: "Bad Request. Please fill all field." });
        } else if (!(status_reservation.includes(status))) {
            res.status(400).message({ message: "Bad Request. Please enter a valid status." });
        }

        const reservation = { status };
        const connection = await getConnection();
        const result = await connection.query("UPDATE reservation SET ? WHERE id = ?", [reservation, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteReservation = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM reservation WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getReservations,
    getReservation,
    addReservation,
    updateReservation,
    updateStatusReservation,
    deleteReservation
};