const { MongoClient } = require('mongodb');

async function insertarClientes() {
  const uri = 'mongodb://localhost:27017'; // Asegúrate que MongoDB esté corriendo en este puerto
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db('proyectodb2'); // Cambia esto si tu base de datos tiene otro nombre
    const clientes = db.collection('clientes');

    const datos = [
      { nombre: "Ana", edad: 28, pais: "México", compras: [120, 340, 560] },
      { nombre: "Luis", edad: 32, pais: "México", compras: [600, 700, 800] },
      { nombre: "Carlos", edad: 24, pais: "Colombia", compras: [100, 200] },
      { nombre: "María", edad: 30, pais: "México", compras: [300, 400, 500] },
      { nombre: "Pedro", edad: 26, pais: "Chile", compras: [150, 250] },
      { nombre: "Lucía", edad: 35, pais: "México", compras: [900, 850, 920] },
      { nombre: "Jorge", edad: 22, pais: "Argentina", compras: [80, 120] },
      { nombre: "Sofía", edad: 29, pais: "México", compras: [400, 410, 420] },
      { nombre: "Diego", edad: 27, pais: "Perú", compras: [300, 320] },
      { nombre: "Valeria", edad: 31, pais: "México", compras: [700, 710, 720] },
      { nombre: "Andrés", edad: 25, pais: "México", compras: [500, 600] },
      { nombre: "Camila", edad: 33, pais: "Colombia", compras: [200, 300, 400] },
      { nombre: "Fernando", edad: 40, pais: "México", compras: [1000, 1100] },
      { nombre: "Isabel", edad: 23, pais: "México", compras: [150, 160] },
      { nombre: "Raúl", edad: 36, pais: "México", compras: [800, 850] },
      { nombre: "Patricia", edad: 29, pais: "Guatemala", compras: [300, 350] },
      { nombre: "Héctor", edad: 34, pais: "México", compras: [600, 620, 640] },
      { nombre: "Daniela", edad: 28, pais: "México", compras: [500, 550] },
      { nombre: "Tomás", edad: 21, pais: "México", compras: [100, 200] },
      { nombre: "Rosa", edad: 38, pais: "México", compras: [950, 970] }
    ];

    const resultado = await clientes.insertMany(datos);
    console.log("Clientes insertados:", resultado.insertedCount);
  } catch (error) {
    console.error("Error al insertar clientes:", error);
  } finally {
    await client.close();
  }
}

insertarClientes();
