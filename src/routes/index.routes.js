import { Router } from "express"
import boloRouter from "./bolos.routes.js"
import clienteRouter from "./clientes.routes.js"
import pedidoRouter from "./pedidos.routes.js"

const router = Router()
router.use(boloRouter)
router.use(clienteRouter)
router.use(pedidoRouter)

export default router