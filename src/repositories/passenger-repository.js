import { db } from "../configs/database-connection.js"

async function create(firstName, lastName) {
    const result = await db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2) RETURNING *;`, [firstName, lastName])

    return result.rows[0]
}

async function findById(id) {
    const result = await db.query(`SELECT * FROM passengers WHERE id = $1;`, [id])

    return result.rows[0]
}

export const passengerRepository = { create, findById }