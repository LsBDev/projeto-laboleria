import { db } from "../database/db.connection.js"

export function buscarBoloDB({name}) {
  return db.query(`
    SELECT name FROM cake WHERE name = $1
  `, [name])
}

export function cadastrarBoloDB(body) {
  const {name, price, image, description} = body
  return db.query(`
    INSERT INTO cake (name, price, image, description) VALUES ($1, $2, $3, $4);
  `, [name, price, image, description])
}