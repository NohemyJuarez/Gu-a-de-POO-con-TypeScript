class CabeceraPagina {
    /**
     * Constructor para crear una cabecera de página.
     * @param {string} titulo - Título de la cabecera.
     * @param {string} color - Color de la cabecera.
     * @param {string} fuente - Tipo de fuente para el texto de la cabecera.
     */
    constructor(titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }

    /**
     * Método que retorna las propiedades de la cabecera en formato de cadena.
     * @returns {string} Propiedades de la cabecera (título, color, fuente).
     */
    obtenerPropiedades() {
        return `Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`;
    }

    /**
     * Alinea el título de la cabecera según el valor de alineación proporcionado.
     * Valida si la alineación es válida (centrado, derecha, izquierda).
     * @param {string} alineacion - Tipo de alineación del título.
     * @returns {string} Mensaje sobre la alineación del título.
     */
    alinearTitulo(alineacion) {
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
    imprimirPropiedades() {
        console.log(this.obtenerPropiedades());
    }
}

// Instancia de ejemplo para la clase CabeceraPagina
const cabecera = new CabeceraPagina('Mi Página', 'azul', 'Arial');
cabecera.imprimirPropiedades(); // Imprime las propiedades
console.log(cabecera.alinearTitulo('centrado')); // Alinea el título
