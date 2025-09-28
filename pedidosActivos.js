const { MongoClient } = require('mongodb');

async function pedidosActivos() {
  const client = new MongoClient('mongodb://localhost:27017');
  try {
    await client.connect();
    const db = client.db('proyectodb2');
    const pedidos = db.collection('pedidos');

    const fechaLimite = new Date();
    fechaLimite.setDate(fechaLimite.getDate() - 30);

    const resultado = await pedidos.find({
      fecha: { $gte: fechaLimite.toISOString().split('T')[0] }
    }).toArray();

    console.log("Pedidos activos:");
    console.table(resultado);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

pedidosActivos();
