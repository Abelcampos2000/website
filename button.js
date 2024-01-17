function agregarProducto() {
      var nombre = document.getElementById('categoria').value;
      var precio = document.getElementById('talla').value;
      var categoria = document.getElementById('serie').value;
      var categoria = document.getElementById('codigo').value;

      var listItem = document.createElement('li');
      listItem.textContent = `${categoria} - ${talla} - ${serie} - ${codigo} -`;

      document.getElementById('productList').appendChild(listItem);

      // Limpiar el formulario después de agregar un producto
      document.getElementById('productForm').reset();
    }