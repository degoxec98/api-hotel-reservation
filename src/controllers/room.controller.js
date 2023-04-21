import { getConnection } from './../database/database.js';

const getRooms = async(req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM room");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getRoom = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM room WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    getRooms,
    getRoom
};