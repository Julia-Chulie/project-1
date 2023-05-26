import mysql from "mysql2/promise";
import { DB_PORT, DB_HOST, DB_NAME, DB_USER, DB_PWD } from "./const.js";

const pool = mysql.createPool({
  port: DB_PORT,
  host: DB_HOST,
  database: DB_NAME,
  user: DB_USER,
  password: DB_PWD,
});

(async () => {
  try {
    const connection = await pool.getConnection();
    console.log(`Connected to ${connection.config.database}`);
    connection.release();
  } catch (err) {
    console.log("ERROR", err);
  }
})();

export default pool;
