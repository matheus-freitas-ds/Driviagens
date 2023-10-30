import { db } from "../configs/database-connection.js"

async function create(origin, destination, date) {
    const result = await db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3) RETURNING *;`, [origin, destination, date])

    return result.rows[0]
}

export const flightRepository = { create }