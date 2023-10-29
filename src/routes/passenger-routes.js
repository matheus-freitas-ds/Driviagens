import { Router } from "express"
import { validateSchema } from "../middlewares/validate-schema"
import { passengerController } from "../controllers/passenger-controller"
import { passengerSchema } from "../schemas/passenger-schema"

const passengerRouter = Router()

passengerRouter.post("/passengers", validateSchema(passengerSchema), passengerController.savePassenger)

export default passengerRouter