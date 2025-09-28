const { MongoClient } = require('mongodb');

async function pedidosRecientes() {
  const client = new MongoClient('mongodb://localhost:27017');
  try {
    await client.connect();
    const db = client.db('proyectodb2');
    const pedidos = db.collection('pedidos');

    const resultado = await pedidos.find({})
      .sort({ fecha: -1 })
      .limit(10)
      .toArray();

    console.log("Últimos 10 pedidos:");
    console.table(resultado);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

pedidosRecientes();
