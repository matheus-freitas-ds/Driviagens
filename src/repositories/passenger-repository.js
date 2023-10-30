import { db } from "../configs/database-connection.js"

async function create(firstName, lastName) {
    const result = await db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2) RETURNING *;`, [firstName, lastName])

    return result.rows[0]
}

async function findById(id) {
    const result = await db.query(`SELECT * FROM passengers WHERE id = $1;`, [id])

    return result.rows[0]
}

async function findTravels(name) {
    let query = `
        SELECT
            CONCAT("firstName", ' ', "lastName") AS passenger,
            COUNT(travels.id) AS travels
        FROM
            passengers
        LEFT JOIN
            travels
        ON
            passengers.id = travels."passengerId"
    `;

    const queryParams = [];

    if (name) {
        query += `
            WHERE
                CONCAT("firstName", ' ', "lastName") ILIKE $1
        `;
        queryParams.push(`%${name}%`);
    }

    query += `
        GROUP BY
            passengers.id
        ORDER BY
            travels DESC, passenger;
    `;

    const result = await db.query(query, queryParams);

    return result.rows;
}

export const passengerRepository = { create, findById, findTravels }