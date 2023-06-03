import { Router } from "express"
import { validadeSchema } from "../middlewares/validate.middleware.js"
import { clienteSchema } from "../schemas/cliente.schema.js"
import { cadastrarCliente } from "../controllers/clientes.controllers.js"

const clienteRouter = Router()
clienteRouter.post("/clients", validadeSchema(clienteSchema), cadastrarCliente)


export default clienteRouter