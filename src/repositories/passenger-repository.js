import { db } from "../configs/database-connection"

async function create(firstName, lastName) {
    await db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);`, [firstName, lastName])
}

export const passengerRepository = { create }