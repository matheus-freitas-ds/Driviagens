import { Router } from "express"
import { validateSchema } from "../middlewares/validate-schema.js"
import { flightSchema } from "../schemas/flight-schema.js"
import { flightController } from "../controllers/flight-controller.js"

const flightRouter = Router()

flightRouter.post("/flights", validateSchema(flightSchema), flightController.saveFlight)

export default flightRouter