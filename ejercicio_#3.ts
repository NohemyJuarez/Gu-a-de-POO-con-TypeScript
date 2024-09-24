abstract class Persona_v1 {
  /**
   * Constructor para inicializar los datos básicos de una persona.
   * @param nombre - Nombre de la persona.
   * @param apellido - Apellido de la persona.
   * @param direccion - Dirección de la persona.
   * @param telefono - Teléfono de la persona.
   * @param edad - Edad de la persona.
   */
  constructor(
      public nombre: string,
      public apellido: string,
      public direccion: string,
      public telefono: string,
      public edad: number
  ) {}

  /**
   * Verifica si la persona es mayor de edad.
   * @returns {string} Indica si la persona es mayor de edad o no.
   */
  public esMayorDeEdad(): string {
      return this.edad >= 18 ? 'Es mayor de edad' : 'No es mayor de edad';
  }

  // Método abstracto que debe ser implementado por las clases derivadas.
  abstract mostrarDatos(): void;
}

class Empleado_v1 extends Persona_v1 {
  private sueldo: number;

  /**
   * Constructor para inicializar un empleado con los datos de persona y sueldo.
   * @param nombre - Nombre del empleado.
   * @param apellido - Apellido del empleado.
   * @param direccion - Dirección del empleado.
   * @param telefono - Teléfono del empleado.
   * @param edad - Edad del empleado.
   * @param sueldo - Sueldo del empleado.
   */
  constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
      super(nombre, apellido, direccion, telefono, edad);
      this.sueldo = sueldo;
  }

  /**
   * Actualiza el sueldo del empleado.
   * @param sueldo - Nuevo sueldo del empleado.
   */
  public cargarSueldo(sueldo: number): void {
      this.sueldo = sueldo;
  }

  /**
   * Imprime el sueldo actual del empleado.
   */
  public imprimirSueldo(): void {
      console.log(`El sueldo es: ${this.sueldo}`);
  }

  /**
   * Imprime los datos completos del empleado.
   */
  public mostrarDatos(): void {
      console.log(`Nombre: ${this.nombre} ${this.apellido}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}, Edad: ${this.edad}`);
  }
}

// Ejemplo de uso
const empleado_v1 = new Empleado_v1('Josue', 'Guardado', 'Ilopango', '9754-3334', 30, 1500);
empleado_v1.mostrarDatos(); // Muestra los datos del empleado
empleado_v1.imprimirSueldo(); // Muestra el sueldo del empleado
console.log(empleado_v1.esMayorDeEdad()); // Verifica si es mayor de edad
