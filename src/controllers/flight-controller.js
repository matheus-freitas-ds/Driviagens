import httpStatus from "http-status"
import { flightService } from "../services/flight-service.js"

async function saveFlight(req, res) {
    const { origin, destination, date } = req.body

    const flightInfo = await flightService.create(origin, destination, date)

    res.status(httpStatus.CREATED).send(flightInfo)
}

export const flightController = { saveFlight }