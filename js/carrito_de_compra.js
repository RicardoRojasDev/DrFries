const carrito = [];

function agregarAlCarrito(productoId) {
  // ... (lógica para agregar al carrito)
  
  
  actualizarCarrito();
}

function actualizarCarrito() {
  // ... (lógica para actualizar el DOM y calcular el total)

  // Generar el formulario de pago de WebPay
  const formulario = WebPay.createForm({
    amount: total,
    // ... otros parámetros
  });

  // Agregar el formulario al DOM
  document.body.appendChild(formulario);
}