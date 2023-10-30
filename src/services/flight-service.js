import { flightRepository } from "../repositories/flight-repository.js"
import { errors } from "../errors/errors.js"
import { cityRepository } from "../repositories/city-repository.js"
import dayjs from "dayjs"
import customParseFormat from 'dayjs/plugin/customParseFormat.js'
dayjs.extend(customParseFormat)

async function create(origin, destination, date) {
    if (origin === destination) throw errors.equalCities()

    const today = dayjs()
    const flightDate = dayjs(date, "DD-MM-YYYY")
    if (flightDate < today) throw errors.invalidFlightDate()

    const originCity = await cityRepository.findById(origin)
    if (!originCity) throw errors.notFound("origin")

    const destinationCity = await cityRepository.findById(destination)
    if (!destinationCity) throw errors.notFound("destination")

    return flightRepository.create(origin, destination, date)
}

async function find(origin, destination) {
    const flights = await flightRepository.find(origin, destination)

    const formattedflights = flights.map(row => ({
        id: row.flight_id,
        origin: row.origin_city,
        destination: row.destination_city,
        date: dayjs(row.flight_date, 'DD-MM-YYYY').format("DD-MM-YYYY")
    }))

    return formattedflights
}

export const flightService = { create, find }