import { db } from "../database/db.connection.js"

export function buscarClienteDB(id) {
  return db.query(`
    SELECT * FROM client WHERE id = $1;
  `, [id])
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

export function buscarPedidoIdClienteDB({id}) {
  return db.query(`
    SELECT 
      "order".id AS "orderId", 
      "order".quantity, 
      "order".created_at AS "createdAt",
      "order".total_price AS "totalPrice", 
      cake.name AS "cakeName"
      FROM "order"
        JOIN cake ON "order".cake_id = cake.id
      WHERE "order".client_id = $1;
  `, [id])
}

export function buscarTudoPedidoDB() {
  return db.query(`
    SELECT
      "order".id AS "orderId",
      "order".quantity,
      "order".created_at AS "createdAt",
      "order".total_price AS "totalPrice",
      client.id AS "clientId",
      client.name AS "clientName",
      address.address AS "clientAddress",
      phone.phone AS "clientPhone",
      cake.id AS "cakeId",
      cake.name AS "cakeName",
      cake.price AS "cakePrice",
      cake.image AS "cakeImage",
      cake.description AS "cakeDescription"
      FROM
        "order"
      JOIN
        client ON "order".client_id = client.id
      JOIN
        address ON client.id = address.client_id
      JOIN
        phone ON client.id = phone.client_id
      JOIN
        cake ON "order".cake_id = cake.id;
`)
}