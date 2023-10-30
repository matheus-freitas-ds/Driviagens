import httpStatus from "http-status"
import { flightService } from "../services/flight-service.js"

async function saveFlight(req, res) {
    const { origin, destination, date } = req.body

    const flightInfo = await flightService.create(origin, destination, date)

    res.status(httpStatus.CREATED).send(flightInfo)
}

async function getFlights(req, res) {
    const origin = req.query.origin || null
    const destination = req.query.destination || null

    const allFlights = await flightService.find(origin, destination)
    
    res.send(allFlights)
}

export const flightController = { saveFlight, getFlights }