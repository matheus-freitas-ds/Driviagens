import { passengerRepository } from "../repositories/passenger-repository.js"

async function create(firstName, lastName) {
    await passengerRepository.create(firstName, lastName)
}

export const passengerService = { create }