import productos from '../database/index.js'

/* Buscar el elemento en el DOM */
const productosContenedor = document.getElementById('productosContenedor')
const bebidasContenedor = document.getElementById('bebidasContenedor')

/* Pintamos los productos en el DOM */
function pintarProductos() {
  /* Creamos una variable para almacenar después los productos */

  let html1 = ''
  /* Recorremos el array de productos */
  for (const { id, nombre, imagen, precio, cantidad, categoria } of productos) {
    if (categoria == 'aperitivos') {
      html1 += `
    <div>
      <img src="${imagen}" alt="${nombre}">
      <div>
        <h2>${nombre} - $ ${precio}</h2>
        <p>Cantidad: ${cantidad}</p>
        <div>
          <button type="button" class="agregar" data-id="${id}">Agregar</button>
        </div>
      </div>
    </div>    
    `
    }
  }
  productosContenedor.innerHTML = html1
  let html = ''
  /* Recorremos el array de productos */
  for (const { id, nombre, imagen, precio, cantidad, categoria } of productos) {
    if (categoria == 'bebidas') {
      html += `
    <div class="cardBebidas">
      <div class="imgCardBebidas">
      <img src="${imagen}" alt="${nombre}">
      </div>
      <div class="contenidoCardBebida">
      <div class="cardtitlebebida">
        <h2>${nombre}</h2>
        <h2>$${precio}.00</h2>
        </div>
        <p><span>Cantidad:</span> ${cantidad}</p>
        <div class="buttonAddBebidas">
          <button type="button" class="agregar" data-id="${id}">Agregar</button>
        </div>
      </div>
    </div>    
    `
    }
  }
  bebidasContenedor.innerHTML = html

}

export default pintarProductos
