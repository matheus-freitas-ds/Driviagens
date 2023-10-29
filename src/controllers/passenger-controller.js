import httpStatus from "http-status"
import { passengerService } from "../services/passenger-service.js"

async function savePassenger(req, res) {
    const { firstName, lastName } = req.body

    const passengerInfo = await passengerService.create(firstName, lastName)

    res.status(httpStatus.CREATED).send(passengerInfo)
}

export const passengerController = { savePassenger }