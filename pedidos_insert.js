const { MongoClient } = require('mongodb');

async function insertarPedidos() {
  const client = new MongoClient('mongodb://localhost:27017');
  try {
    await client.connect();
    const db = client.db('proyectodb2');
    const pedidos = db.collection('pedidos');

    await pedidos.insertMany([
      { cliente: "Ana", fecha: "2023-01-10", total: 120 },
      { cliente: "Luis", fecha: "2023-02-15", total: 700 },
      // ...otros pedidos
    ]);

    console.log("Pedidos insertados.");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

insertarPedidos();
