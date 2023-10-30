import { db } from "../configs/database-connection.js"

async function find(name) {
    const result = await db.query(`SELECT * FROM cities WHERE name = $1;`, [name])

    return result.rows[0]
}

async function create(name) {
    const result = await db.query(`INSERT INTO cities (name) VALUES ($1) RETURNING *;`, [name])

    return result.rows[0]
}

async function findById(id) {
    const result = await db.query(`SELECT * FROM cities WHERE id = $1;`, [id])

    return result.rows[0]
}

export const cityRepository = { create, find, findById }