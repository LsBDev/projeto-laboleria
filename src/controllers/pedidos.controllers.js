import { buscarBoloDB, buscarClienteDB, buscarPedidoIdClienteDB, buscarPedidoIdDB, buscarTudoPedidoDB, cadastrarPedidoDB } from "../repositories/pedidos.repository.js"
import dayjs from "dayjs"


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

export async function buscarTudoPedido(req, res) {
  const {date} = req.query
  try {
    const {rows} = await buscarTudoPedidoDB()
    if(!rows) return res.status(404).send([])

    const objeto = rows.map((order) => {
      const client = {
        id: order.clientId,
        name: order.clientName,
        address: order.clientAddress,
        phone: order.clientPhone
      }
      const cake = {
        id: order.cakeId,
        name: order.cakeName,
        price: order.cakePrice,
        description: order.cakeDescription,
        image: order.cakeImage
      }
      const objeto = {
        client: client,
        cake: cake,
        orderId: order.orderId,
        createdAt: dayjs(order.createdAt).format("YYYY-MM-DD HH:mm"),
        quantity: order.quantity,
        totalPrice: order.totalPrice
      }
      return objeto
    })

    const objFiltrado = objeto.filter((order) => order.createdAt.includes(date))
    if(date && objFiltrado.length === 0 || objeto.length === 0) return res.status(404).send(objFiltrado)
    if(!date) return res.status(200).send(objeto)

    res.status(200).send(objFiltrado)

  }catch(err) {
    res.send(err.message)
  }
}

export async function buscarPedidoId(req, res) {
  try {
    const {rows} = await buscarPedidoIdDB(req.params)
    if(rows.length === 0) return res.sendStatus(404)
    const objeto = rows.map((order) => {
      const client = {
        id: order.clientId,
        name: order.clientName,
        address: order.clientAddress,
        phone: order.clientPhone
      }
      const cake = {
        id: order.cakeId,
        name: order.cakeName,
        price: order.cakePrice,
        description: order.cakeDescription,
        image: order.cakeImage
      }
      const objeto = {
        client: client,
        cake: cake,
        orderId: order.orderId,
        createdAt: dayjs(order.createdAt).format("YYYY-MM-DD HH:mm"),
        quantity: order.quantity,
        totalPrice: order.totalPrice
      }
      return objeto
    })
    res.status(200).send(objeto)

  } catch(err) {
    res.status(500).send(err.message)
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





