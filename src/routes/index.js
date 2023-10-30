import { Router } from "express"
import passengerRouter from "./passenger-routes.js"
import cityRouter from "./city-routes.js"

const router = Router()
router.use(passengerRouter)
router.use(cityRouter)

export default router