class Persona {
    /**
     * Constructor que inicializa una persona con nombre, apellido, dirección, teléfono y edad.
     * @param {string} nombre - Nombre de la persona.
     * @param {string} apellido - Apellido de la persona.
     * @param {string} direccion - Dirección de la persona.
     * @param {string} telefono - Teléfono de la persona.
     * @param {number} edad - Edad de la persona.
     */
    constructor(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    /**
     * Verifica si la persona es mayor de edad.
     * @returns {string} Mensaje que indica si la persona es mayor de edad.
     */
    esMayorDeEdad() {
        return this.edad >= 18 ? 'Es mayor de edad' : 'No es mayor de edad';
    }

    /**
     * Método abstracto para mostrar los datos. Deberá ser implementado por clases hijas.
     */
    mostrarDatos() {
        throw new Error('Este método debe ser implementado por una subclase');
    }
}

class Empleado extends Persona {
    /**
     * Constructor que inicializa un empleado con los atributos de persona y sueldo.
     * @param {string} nombre - Nombre del empleado.
     * @param {string} apellido - Apellido del empleado.
     * @param {string} direccion - Dirección del empleado.
     * @param {string} telefono - Teléfono del empleado.
     * @param {number} edad - Edad del empleado.
     * @param {number} sueldo - Sueldo del empleado.
     */
    constructor(nombre, apellido, direccion, telefono, edad, sueldo) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }

    /**
     * Actualiza el sueldo del empleado.
     * @param {number} sueldo - Nuevo sueldo del empleado.
     */
    cargarSueldo(sueldo) {
        this.sueldo = sueldo;
    }

    /**
     * Imprime el sueldo actual del empleado.
     */
    imprimirSueldo() {
        console.log(`El sueldo es: ${this.sueldo}`);
    }

    /**
     * Imprime los datos completos del empleado (incluye datos de persona).
     */
    mostrarDatos() {
        console.log(`Nombre: ${this.nombre} ${this.apellido}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}, Edad: ${this.edad}`);
    }
}

// Ejemplo de uso de la clase Empleado
const empleado = new Empleado('Carlos', 'González', 'Calle Falsa 123', '123456789', 30, 1500);
empleado.mostrarDatos(); // Muestra los datos del empleado
empleado.imprimirSueldo(); // Muestra el sueldo del empleado
console.log(empleado.esMayorDeEdad()); // Verifica si el empleado es mayor de edad
