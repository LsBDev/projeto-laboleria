import { buscarBoloDB, buscarClienteDB, buscarPedidoIdClienteDB, cadastrarPedidoDB } from "../repositories/pedidos.repository.js"


export async function cadastrarPedido(req,res) {
  const {clientId} = req.body
  try {
    const clienteEncontrado = await buscarClienteDB(clientId)
    if(clienteEncontrado.rowCount === 0) return res.status(404).send("Cliente não existe!")
    // if((await buscarClienteDB(req.body)).rowCount === 0) return res.status(404).send("Cliente não existe!")
    
    const boloEncontrado = await buscarBoloDB(req.body)
    if(boloEncontrado.rowCount === 0) return res.status(404).send("Bolo não existe!")

    await cadastrarPedidoDB(req.body)
    res.sendStatus(201)

  } catch(err) {
    res.send(err.message)
  }
}

export async function buscarPedidoIdCliente(req, res) {
  const {id} = req.params
  try {
    const clienteEncontrado = await buscarClienteDB(id)
    if(clienteEncontrado.rowCount === 0) return res.status(404).send("Cliente não existe!")

    const {rows} = await buscarPedidoIdClienteDB(req.params)
    res.status(200).send(rows)

  } catch(err) {
    res.status(500).send(err.message)
  }
}


