import { Router } from "express"
import { validadeSchema } from "../middlewares/bolo.middleware.js"
import { boloSchema } from "../schemas/bolo.schema.js"
import { cadastrarBolo } from "../controllers/bolos.controllers.js"

const boloRouter = Router()
boloRouter.post("/cakes", validadeSchema(boloSchema), cadastrarBolo)


export default boloRouter