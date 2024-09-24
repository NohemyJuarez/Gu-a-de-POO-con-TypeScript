class Coche_v1 {
  /**
   * Constructor para inicializar un coche con marca, modelo y precio.
   * @param marca - Marca del coche.
   * @param modelo - Modelo del coche.
   * @param precio - Precio del coche.
   */
  constructor(public marca: string, public modelo: string, public precio: number) {}

  /**
   * Calcula el precio con un descuento.
   * @param porcentaje - Porcentaje de descuento.
   * @returns El precio con descuento aplicado.
   */
  public calcularDescuento(porcentaje: number): number {
      return this.precio - (this.precio * porcentaje) / 100;
  }

  /**
   * Muestra los detalles del coche.
   */
  public mostrarDetalles(): void {
      console.log(`Coche: ${this.marca} ${this.modelo}, Precio: ${this.precio}`);
  }
}

class GestionCoches_v1 {
  private coches: Coche_v1[] = [];

  /**
   * Añade un coche a la lista de gestión.
   * @param coche - El coche que se añade.
   */
  public agregarCoche(coche: Coche_v1): void {
      this.coches.push(coche);
  }

  /**
   * Muestra los detalles de todos los coches.
   */
  public mostrarCoches(): void {
      this.coches.forEach(coche => coche.mostrarDetalles());
  }

  /**
   * Busca un coche por su marca y modelo.
   * @param marca - Marca del coche.
   * @param modelo - Modelo del coche.
   * @returns El coche encontrado o null si no se encuentra.
   */
  public buscarCoche(marca: string, modelo: string): Coche_v1 | null {
      return this.coches.find(coche => coche.marca === marca && coche.modelo === modelo) || null;
  }
}

// Ejemplo de uso
const coche1_v1 = new Coche_v1('Ford', 'Fiesta', 15000);
const coche2_v1 = new Coche_v1('Tesla', 'Model S', 80000);

const gestion_v1 = new GestionCoches_v1();
gestion_v1.agregarCoche(coche1_v1);
gestion_v1.agregarCoche(coche2_v1);
gestion_v1.mostrarCoches(); // Muestra todos los coches

const cocheEncontrado_v1 = gestion_v1.buscarCoche('Ford', 'Fiesta');
if (cocheEncontrado_v1) {
  cocheEncontrado_v1.mostrarDetalles(); // Muestra los detalles del coche encontrado
}
