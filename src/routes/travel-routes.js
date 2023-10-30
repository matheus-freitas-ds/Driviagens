import { Router } from "express"
import { validateSchema } from "../middlewares/validate-schema.js"
import { travelSchema } from "../schemas/travel-schema.js"
import { travelController } from "../controllers/travel-controller.js"

const travelRouter = Router()

travelRouter.post("/travels", validateSchema(travelSchema), travelController.saveTravel)

export default travelRouter