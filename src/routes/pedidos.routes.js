import { Router } from "express"
import { validadeSchema } from "../middlewares/validate.middleware.js"
import { pedidoSchema } from "../schemas/pedido.schema.js"
import { buscarPedidoId, buscarPedidoIdCliente, buscarTudoPedido, cadastrarPedido } from "../controllers/pedidos.controllers.js"

const pedidoRouter = Router()
pedidoRouter.post("/order", validadeSchema(pedidoSchema), cadastrarPedido)
pedidoRouter.get("/clients/:id/orders", buscarPedidoIdCliente)
pedidoRouter.get("/orders", buscarTudoPedido)
pedidoRouter.get("/orders/:id", buscarPedidoId)


export default pedidoRouter

