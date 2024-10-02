fetch('productos.json')
  .then(response => response.json())
  .then(data => {
    const menuContainer = document.getElementById('menu-container');

    data.forEach(categoria => {
      const categoriaElement = document.createElement('div');
      categoriaElement.textContent = categoria.categoria;

      categoria.productos.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.classList.add('menu-item');
        productoElement.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <h3>${producto.nombre}</h3>
          <p>${producto.descripcion}</p>
          <p>Precio: $${producto.precio}</p>
        `;
        categoriaElement.appendChild(productoElement);
      });

      menuContainer.appendChild(categoriaElement);
    });
  })
  .catch(error => {
    console.error('Error al cargar el menú:', error);
  });