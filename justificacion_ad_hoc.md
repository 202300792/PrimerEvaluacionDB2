# ¿Por qué no resolverlo solo con consultas ad-hoc?

Las consultas ad-hoc pueden parecer suficientes, pero presentan varios problemas:

- ❌ **Rendimiento:** Cada consulta ejecuta todo el cálculo desde cero.
- ❌ **Escalabilidad:** No se aprovechan índices ni optimización.
- ❌ **Repetición:** Si se consulta frecuentemente, se desperdician recursos.
- ❌ **Mantenimiento:** Las consultas dispersas dificultan la trazabilidad.

---

## ✅ Ventajas de usar colecciones derivadas

- **Mejor rendimiento:** Los datos ya están filtrados y listos.
- **Mayor claridad:** Separar colecciones por propósito facilita el análisis.
- **Facilidad de integración:** Ideal para dashboards, APIs o reportes.
- **Optimización con índices:** Se pueden indexar campos clave como `fecha` y `estado`.

---

**Conclusión:**  
Las colecciones derivadas permiten un sistema más eficiente, escalable y mantenible que depender exclusivamente de consultas ad-hoc.