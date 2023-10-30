import { db } from "../configs/database-connection.js"

async function create(origin, destination, date) {
    const result = await db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3) RETURNING *;`, [origin, destination, date])

    return result.rows[0]
}

async function findById(id) {
    const result = await db.query(`SELECT * FROM flights WHERE id = $1;`, [id])

    return result.rows[0]
}

async function find(origin, destination) {
    let query = `
        SELECT
            f.id AS flight_id,
            f.date AS flight_date,
            origin_city.name AS origin_city,
            destination_city.name AS destination_city
        FROM
            flights f
        JOIN
            cities origin_city
        ON
            f.origin = origin_city.id
        JOIN
            cities destination_city
        ON
            f.destination = destination_city.id
    `

    const queryParams = []

    if (origin !== null) {
        query += `
            WHERE
                origin_city.name = $1
        `
        queryParams.push(origin)

        if (destination !== null) {
            query += `
                AND
                destination_city.name = $2
            `
            queryParams.push(destination)
        }
    }
    else if (destination !== null) {
        query += `
            WHERE
                destination_city.name = $1
        `
        queryParams.push(destination)
    }

    query += 'ORDER BY f.date;'

    const result = await db.query(query, queryParams)

    return result.rows
}

export const flightRepository = { create, findById, find }