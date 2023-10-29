import { passengerRepository } from "../repositories/passenger-repository.js"

async function create(firstName, lastName) {
    return passengerRepository.create(firstName, lastName)
}

export const passengerService = { create }