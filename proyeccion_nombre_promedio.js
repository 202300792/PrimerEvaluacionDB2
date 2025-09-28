const { MongoClient } = require('mongodb');

async function consultarProyeccion() {
  const client = new MongoClient('mongodb://localhost:27017');
  try {
    await client.connect();
    const db = client.db('proyectodb2');
    const clientes = db.collection('clientes');

    const resultado = await clientes.aggregate([
      {
        $project: {
          nombre: 1,
          promedioCompras: { $avg: "$compras" }
        }
      }
    ]).toArray();

    console.log("Proyección de nombre y promedio de compras:");
    console.table(resultado);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

consultarProyeccion();
