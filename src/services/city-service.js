import { cityRepository } from "../repositories/city-repository.js"
import { errors } from "../errors/errors.js"

async function create(name) {
    const city = await cityRepository.find(name)
    if (city) throw errors.conflict("city")

    return cityRepository.create(name)
}

export const cityService = { create }