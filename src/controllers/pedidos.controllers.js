import { buscarBoloDB, buscarClienteDB, cadastrarPedidoDB } from "../repositories/pedidos.repository.js"


export async function cadastrarPedido(req,res) {
  try {
    const clienteEncontrado = await buscarClienteDB(req.body)
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