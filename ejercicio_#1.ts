class CabeceraPagina_v1 {
  // Propiedades privadas para evitar acceso directo desde fuera de la clase
  private titulo: string;
  private color: string;
  private fuente: string;

  /**
   * Constructor que inicializa una cabecera con título, color y fuente.
   * @param {string} titulo - El título de la cabecera.
   * @param {string} color - El color de la cabecera.
   * @param {string} fuente - La fuente del texto de la cabecera.
   */
  constructor(titulo: string, color: string, fuente: string) {
      this.titulo = titulo;
      this.color = color;
      this.fuente = fuente;
  }

  /**
   * Obtiene una cadena con las propiedades de la cabecera.
   * @returns {string} Propiedades en formato legible.
   */
  public obtenerPropiedades(): string {
      return `Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`;
  }

  /**
   * Alinea el título de la cabecera validando que la alineación esté permitida.
   * @param {string} alineacion - Alineación deseada: 'centrado', 'derecha' o 'izquierda'.
   * @returns {string} Confirmación de alineación o mensaje de error.
   */
  public alinearTitulo(alineacion: string): string {
      const alineacionesValidas = ['centrado', 'derecha', 'izquierda'];
      if (alineacionesValidas.includes(alineacion)) {
          return `El título aparecerá alineado a: ${alineacion}`;
      } else {
          return 'Alineación no válida';
      }
  }

  /**
   * Imprime las propiedades de la cabecera en la consola.
   */
  public imprimirPropiedades(): void {
      console.log(this.obtenerPropiedades());
  }
}

// Ejemplo de uso
const cabecera_v1 = new CabeceraPagina_v1('Mi Página', 'azul', 'Arial');
cabecera_v1.imprimirPropiedades(); // Muestra las propiedades
console.log(cabecera_v1.alinearTitulo('centrado')); // Muestra la alineación
