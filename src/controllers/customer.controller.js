import { getConnection } from './../database/database.js';

const getCustomers = async(req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM customer");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM customer WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    getCustomers,
    getCustomer
};