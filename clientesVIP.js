const { MongoClient } = require('mongodb');

async function clientesVIP() {
  const client = new MongoClient('mongodb://localhost:27017');
  try {
    await client.connect();
    const db = client.db('proyectodb2');
    const clientes = db.collection('clientes');

    const resultado = await clientes.find({
      compras: { $elemMatch: { $gt: 900 } }
    }).toArray();

    console.log("Clientes VIP:");
    console.table(resultado);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

clientesVIP();
