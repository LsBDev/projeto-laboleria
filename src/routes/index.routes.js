import { Router } from "express"
import boloRouter from "./bolos.routes.js"
import clienteRouter from "./clientes.routes.js"

const router = Router()
router.use(boloRouter)
router.use(clienteRouter)

export default router