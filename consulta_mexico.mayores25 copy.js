const { MongoClient } = require('mongodb');

async function consultarClientes() {
  const client = new MongoClient('mongodb://localhost:27017');
  try {
    await client.connect();
    const db = client.db('proyectodb2');
    const clientes = db.collection('clientes');

    const resultado = await clientes.find({
      pais: "México",
      edad: { $gt: 25 }
    }).toArray();

    console.log("Clientes mexicanos mayores de 25:");
    console.table(resultado);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

consultarClientes();
