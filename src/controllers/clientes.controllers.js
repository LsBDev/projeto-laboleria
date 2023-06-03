import { cadastrarClienteDB, cadastrarEnderecoDB, cadastrarTelefoneDB } from "../repositories/clientes.repository.js"

export async function cadastrarCliente(req, res) {
  try {
    const {rows}= await cadastrarClienteDB(req.body)
    await cadastrarTelefoneDB(req.body, rows[0].id)
    await cadastrarEnderecoDB(req.body, rows[0].id)
    res.sendStatus(201)

  } catch(err) {
    res.status(500).send(err.message)
  }
}