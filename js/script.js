fetch('productos_completos.json')
  .then(response => response.json())
  .then(data => {
    const menuContainer = document.getElementById('menu-container-completos');
      menuContainer.innerHTML = `
      <div class="titulo-categoria">${categoria}</div>`

      
    

    data.forEach(categoria => {
      
      const categoriaElement = document.createElement('div');
      categoriaElement.classList.add('categoria-completos');


      categoria.productos.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.classList.add('menu-item');
        productoElement.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <div class="contenido-text">
          <h3>${producto.nombre}</h3>
          <p>${producto.descripcion}</p>
          <p class="precio" >Precio: $${producto.precio}</p>
        </div>
          <button>Agregar al carrito</button>
          
        `;
        categoriaElement.appendChild(productoElement);
      });

      menuContainer.appendChild(categoriaElement);
    });
  })
  .catch(error => {
    console.error('Error al cargar el menú:', error);
  });





  fetch('productos_sandwichs.json')
  .then(response => response.json())
  .then(data => {
    const menuContainer = document.getElementById('menu-container-sandwichs');
     menuContainer.innerHTML = `
      <div class="titulo-categoria">Sandwichs</div>`
      
    

    data.forEach(categoria => {
      
      const categoriaElement = document.createElement('div');
      categoriaElement.classList.add('categoria-sandwichs');


      categoria.productos.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.classList.add('menu-item');
        productoElement.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <div class="contenido-text">
          <h3>${producto.nombre}</h3>
          <p>${producto.descripcion}</p>
          <p class="precio" >Precio: $${producto.precio}</p>
        </div>
          <button>Agregar al carrito</button>
          
        `;
        categoriaElement.appendChild(productoElement);
      });

      menuContainer.appendChild(categoriaElement);
    });
  })
  .catch(error => {
    console.error('Error al cargar el menú:', error);
  });




  const productos = [
    'categorias.json'
];

const filtros = document.querySelectorAll('.filter-button');
const productosContainer = document.querySelector('.productos-container');

filtros.forEach(filtro => {
    filtro.addEventListener('click', () => {
        const categoriaSeleccionada = filtro.dataset.filter;
        const productosFiltrados = productos.filter(producto => {
            return producto.categoria === categoriaSeleccionada || categoriaSeleccionada === 'all';
        });

        mostrarProductos(productosFiltrados);
    });
});

  // Cargar el JSON
fetch('productos_completos.json')
.then(response => response.json())
.then(data => {
  categorias = data;

  // Obtener los botones de filtro y el contenedor de productos
  const botonesFiltro = document.querySelectorAll('.filter-button');
  const contenedorProductos = document.getElementById('productos-container');

  // Agregar evento a cada botón
  botonesFiltro.forEach(boton => {
    boton.addEventListener('click', () => {
      const categoriaSeleccionada = boton.dataset.filter;

      // Filtrar los productos (aquí debes implementar tu lógica de filtrado)
      const productosFiltrados = productos.filter(producto => {
        return producto.categoria === categoriaSeleccionada;
      });

      // Mostrar los productos filtrados
      mostrarProductos(productosFiltrados, contenedorProductos);
    });
  });
});

// Función para mostrar los productos en el contenedor
function mostrarProductos(productos, contenedor) {
contenedor.innerHTML = ''; // Limpiar el contenedor

productos.forEach(producto => {
  const productoElement = document.createElement('div');
  productoElement.textContent = producto.nombre;
  contenedor.appendChild(productoElement);
});
}