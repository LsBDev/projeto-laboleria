import { buscarBoloDB, cadastrarBoloDB } from "../repositories/bolos.repository.js"

export async function cadastrarBolo(req, res) {
  try {
    const boloExiste = await buscarBoloDB(req.body)
    if(boloExiste.rowCount !== 0) return res.status(409).send("Bolo já cadastrado!")

    await cadastrarBoloDB(req.body)
    res.sendStatus(201)

  } catch(err) {
    res.status(500).send(err.message)
  }
}
