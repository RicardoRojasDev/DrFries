fetch('productos_completos.json')
  .then(response => response.json())
  .then(data => {
    const menuContainer = document.getElementById('menu-container');
      
    

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
          <p>Precio: $${producto.precio}</p>
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
