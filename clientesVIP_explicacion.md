# ¿Conviene materializar la colección `clientesVIP`?

Materializar la colección `clientesVIP` puede ser útil si:

- Se consulta frecuentemente en reportes o dashboards.
- El cálculo del promedio es costoso y se repite muchas veces.
- Los datos de compras no cambian constantemente.

Sin embargo, si los datos se actualizan con frecuencia, es mejor mantener la consulta como una agregación dinámica para evitar inconsistencias.

**Recomendación:**  
Materializar si se usa para análisis estático.  
Mantener dinámica si se requiere precisión en tiempo real.