import { Router } from "express"
import { validateSchema } from "../middlewares/validate-schema.js"
import { citySchema } from "../schemas/city-schema.js"
import { CityController } from "../controllers/city-controller.js"

const cityRouter = Router()

cityRouter.post("/cities", validateSchema(citySchema), CityController.saveCity)

export default cityRouter