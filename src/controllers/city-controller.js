import httpStatus from "http-status"
import { cityService } from "../services/city-service.js"

async function saveCity(req, res) {
    const { name } = req.body

    const cityInfo = await cityService.create(name)

    res.status(httpStatus.CREATED).send(cityInfo)
}

export const CityController = { saveCity }