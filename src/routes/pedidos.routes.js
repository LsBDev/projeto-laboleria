import { Router } from "express"
import { validadeSchema } from "../middlewares/validate.middleware.js"
import { pedidoSchema } from "../schemas/pedido.schema.js"
import { cadastrarPedido } from "../controllers/pedidos.controllers.js"

const pedidoRouter = Router()
pedidoRouter.post("/order", validadeSchema(pedidoSchema), cadastrarPedido )


export default pedidoRouter

