import httpStatus from "http-status"
import { passengerService } from "../services/passenger-service"

export async function savePassenger(req, res) {
    const { firstName, lastName } = req.body

    await passengerService.create(firstName, lastName)

    res.sendStatus(httpStatus.CREATED)
}

export const passengerController = { savePassenger }