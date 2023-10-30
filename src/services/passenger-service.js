import { passengerRepository } from "../repositories/passenger-repository.js"

async function create(firstName, lastName) {
    return passengerRepository.create(firstName, lastName)
}

async function findTravels(name) {
    const travels = await passengerRepository.findTravels(name)
 
    return travels
}

export const passengerService = { create, findTravels }