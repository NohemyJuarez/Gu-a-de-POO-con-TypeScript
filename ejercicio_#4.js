class Producto {
    /**
     * Constructor para inicializar un producto con nombre, cantidad y precio unitario.
     * @param {string} nombre - Nombre del producto.
     * @param {number} cantidad - Cantidad del producto.
     * @param {number} precioUnitario - Precio unitario del producto.
     */
    constructor(nombre, cantidad, precioUnitario) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precioUnitario = precioUnitario;
    }

    /**
     * Calcula el precio total del producto basado en la cantidad y el precio unitario.
     * @returns {number} Precio total del producto.
     */
    calcularPrecioTotal() {
        return this.cantidad * this.precioUnitario;
    }
}

class Factura {
    /**
     * Constructor para inicializar una factura con número y productos.
     * @param {string} numero - Número de la factura.
     * @param {Array<Producto>} productos - Lista de productos en la factura.
     */
    constructor(numero, productos = []) {
        this.numero = numero;
        this.productos = productos;
    }

    /**
     * Añade un nuevo producto a la factura.
     * @param {Producto} producto - El producto que se añade.
     */
    agregarProducto(producto) {
        this.productos.push(producto);
    }

    /**
     * Calcula el total de la factura sumando el precio total de cada producto.
     * @returns {number} Total de la factura.
     */
    calcularTotal() {
        return this.productos.reduce((total, producto) => total + producto.calcularPrecioTotal(), 0);
    }

    /**
     * Muestra los detalles de la factura: número y productos.
     */
    mostrarFactura() {
        console.log(`Factura N°: ${this.numero}`);
        this.productos.forEach(producto => {
            console.log(`${producto.nombre} - Cantidad: ${producto.cantidad}, Precio Unitario: ${producto.precioUnitario}, Total: ${producto.calcularPrecioTotal()}`);
        });
        console.log(`Total: ${this.calcularTotal()}`);
    }
}

// Ejemplo de uso de Factura y Producto
const producto1 = new Producto('Laptop', 2, 800);
const producto2 = new Producto('Teclado', 5, 20);

const factura = new Factura('001');
factura.agregarProducto(producto1);
factura.agregarProducto(producto2);
factura.mostrarFactura(); // Muestra los detalles de la factura y el total
