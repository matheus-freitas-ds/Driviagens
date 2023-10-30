import { Router } from "express"
import { validateSchema } from "../middlewares/validate-schema.js"
import { passengerController } from "../controllers/passenger-controller.js"
import { passengerSchema } from "../schemas/passenger-schema.js"

const passengerRouter = Router()

passengerRouter.post("/passengers", validateSchema(passengerSchema), passengerController.savePassenger)
passengerRouter.get("/passengers/travels", passengerController.findTravels)

export default passengerRouter