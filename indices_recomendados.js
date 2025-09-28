// Índice por fecha para acelerar búsquedas por rango temporal
db.pedidos.createIndex({ fecha: 1 })

// Índice por estado para filtrar pedidos activos
db.pedidos.createIndex({ estado: 1 })

// Índice compuesto si se combinan filtros
db.pedidos.createIndex({ fecha: 1, estado: 1 })