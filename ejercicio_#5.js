class Coche {
    /**
     * Constructor para inicializar un coche con marca, modelo, y precio.
     * @param {string} marca - Marca del coche.
     * @param {string} modelo - Modelo del coche.
     * @param {number} precio - Precio del coche.
     */
    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

    /**
     * Calcula un descuento sobre el precio del coche.
     * @param {number} porcentaje - Porcentaje de descuento.
     * @returns {number} Precio del coche con descuento aplicado.
     */
    calcularDescuento(porcentaje) {
        return this.precio - (this.precio * porcentaje / 100);
    }

    /**
     * Muestra los detalles del coche.
     */
    mostrarDetalles() {
        console.log(`Coche: ${this.marca} ${this.modelo}, Precio: ${this.precio}`);
    }
}

class GestionCoches {
    /**
     * Constructor que inicializa una lista vacía de coches.
     */
    constructor() {
        this.coches = [];
    }

    /**
     * Añade un coche a la lista de gestión.
     * @param {Coche} coche - El coche que se añade.
     */
    agregarCoche(coche) {
        this.coches.push(coche);
    }

    /**
     * Muestra los detalles de todos los coches en la lista.
     */
    mostrarCoches() {
        this.coches.forEach(coche => coche.mostrarDetalles());
    }

    /**
     * Encuentra un coche por su marca y modelo.
     * @param {string} marca - Marca del coche.
     * @param {string} modelo - Modelo del coche.
     * @returns {Coche | null} El coche encontrado o null si no se encuentra.
     */
    buscarCoche(marca, modelo) {
        return this.coches.find(coche => coche.marca === marca && coche.modelo === modelo) || null;
    }
}

// Ejemplo de uso
const coche1 = new Coche('Ford', 'Fiesta', 15000);
const coche2 = new Coche('Tesla', 'Model S', 80000);

const gestion = new GestionCoches();
gestion.agregarCoche(coche1);
gestion.agregarCoche(coche2);

gestion.mostrarCoches(); // Muestra todos los coches
const cocheEncontrado = gestion.buscarCoche('Ford', 'Fiesta');
if (cocheEncontrado) {
    cocheEncontrado.mostrarDetalles(); // Muestra los detalles del coche encontrado
}
