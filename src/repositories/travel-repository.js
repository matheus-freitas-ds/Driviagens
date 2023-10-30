import { db } from "../configs/database-connection.js"

async function create(passengerId, flightId) {
    const result = await db.query(`INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2) RETURNING *;`, [passengerId, flightId])

    return result.rows[0]
}

export const travelRepository = { create }