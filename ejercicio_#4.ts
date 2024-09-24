class Producto_v1 {
  /**
   * Constructor para inicializar un producto con nombre, cantidad y precio unitario.
   * @param nombre - Nombre del producto.
   * @param cantidad - Cantidad del producto.
   * @param precioUnitario - Precio unitario del producto.
   */
  constructor(public nombre: string, public cantidad: number, public precioUnitario: number) {}

  /**
   * Calcula el precio total del producto multiplicando la cantidad por el precio unitario.
   * @returns Precio total del producto.
   */
  public calcularPrecioTotal(): number {
      return this.cantidad * this.precioUnitario;
  }
}

class Factura_v1 {
  private productos: Producto_v1[] = [];

  /**
   * Constructor para inicializar una factura con número y productos.
   * @param numero - Número de la factura.
   */
  constructor(public numero: string) {}

  /**
   * Añade un nuevo producto a la factura.
   * @param producto - El producto que se añade.
   */
  public agregarProducto(producto: Producto_v1): void {
      this.productos.push(producto);
  }

  /**
   * Calcula el total de la factura sumando el precio total de cada producto.
   * @returns El total de la factura.
   */
  public calcularTotal(): number {
      return this.productos.reduce((total, producto) => total + producto.calcularPrecioTotal(), 0);
  }

  /**
   * Muestra los detalles de la factura, incluyendo número y productos.
   */
  public mostrarFactura(): void {
      console.log(`Factura N°: ${this.numero}`);
      this.productos.forEach(producto => {
          console.log(`${producto.nombre} - Cantidad: ${producto.cantidad}, Precio Unitario: ${producto.precioUnitario}, Total: ${producto.calcularPrecioTotal()}`);
      });
      console.log(`Total: ${this.calcularTotal()}`);
  }
}

// Ejemplo de uso
const producto1_v1 = new Producto_v1('Laptop', 2, 800);
const producto2_v1 = new Producto_v1('Teclado', 5, 20);

const factura_v1 = new Factura_v1('001');
factura_v1.agregarProducto(producto1_v1);
factura_v1.agregarProducto(producto2_v1);
factura_v1.mostrarFactura(); // Muestra los detalles de la factura y el total
