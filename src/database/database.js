import mysql from "promise-mysql";
import config from "./../config.js";

const connection = mysql.createConnection({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database
});

export const getConnection = () => {
    return connection;
};
