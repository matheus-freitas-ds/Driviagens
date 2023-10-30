import { flightRepository } from "../repositories/flight-repository.js"
import { errors } from "../errors/errors.js"
import { passengerRepository } from "../repositories/passenger-repository.js"
import { travelRepository } from "../repositories/travel-repository.js"

async function create(passengerId, flightId) {

    const passenger = await passengerRepository.findById(passengerId)
    if (!passenger) throw errors.notFound("passenger")

    const flight = await flightRepository.findById(flightId)
    if (!flight) throw errors.notFound("flight")

    return travelRepository.create(passengerId, flightId)
}

export const travelService = { create }