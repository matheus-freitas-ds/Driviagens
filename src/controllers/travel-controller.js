import httpStatus from "http-status"
import { travelService } from "../services/travel-service.js"

async function saveTravel(req, res) {
    const { passengerId, flightId } = req.body

    const travelInfo = await travelService.create(passengerId, flightId)

    res.status(httpStatus.CREATED).send(travelInfo)
}

export const travelController = { saveTravel }