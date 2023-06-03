import { db } from "../database/db.connection.js";

export function cadastrarClienteDB({name}) {
  return db.query(`
    INSERT INTO client (name) VALUES ($1) RETURNING id;
  `, [name])
}
export function cadastrarTelefoneDB({phone}, client_id) {
  return db.query(`
    INSERT INTO phone (phone, client_id) VALUES ($1, $2);
  `, [phone, client_id])
}
export function cadastrarEnderecoDB({address}, client_id) {
  return db.query(`
    INSERT INTO address (address, client_id) VALUES ($1, $2);
`, [address, client_id])
}