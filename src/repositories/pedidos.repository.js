import { db } from "../database/db.connection.js"

export function buscarClienteDB({clientId}) {
  return db.query(`
    SELECT * FROM client WHERE id = $1;
  `, [clientId])
}
export function buscarBoloDB({cakeId}) {
  return db.query(`
    SELECT name FROM cake WHERE id = $1;
  `, [cakeId])
}
export function cadastrarPedidoDB(body) {
  const {clientId, cakeId, quantity, totalPrice} = body
  return db.query(`
    INSERT INTO "order" (client_id, cake_id, quantity, total_price) 
    VALUES ($1, $2, $3, $4);
  `, [clientId, cakeId, quantity, totalPrice])
}