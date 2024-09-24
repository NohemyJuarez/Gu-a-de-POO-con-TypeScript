class Calculadora {
    /**
     * Suma dos números.
     * @param {number} a - Primer número.
     * @param {number} b - Segundo número.
     * @returns {number} Resultado de la suma.
     */
    sumar(a, b) {
        return a + b;
    }

    /**
     * Resta dos números.
     * @param {number} a - Minuendo.
     * @param {number} b - Sustraendo.
     * @returns {number} Resultado de la resta.
     */
    restar(a, b) {
        return a - b;
    }

    /**
     * Multiplica dos números.
     * @param {number} a - Primer número.
     * @param {number} b - Segundo número.
     * @returns {number} Resultado de la multiplicación.
     */
    multiplicar(a, b) {
        return a * b;
    }

    /**
     * Divide dos números si el divisor no es cero.
     * @param {number} a - Dividendo.
     * @param {number} b - Divisor.
     * @returns {number|string} Resultado de la división o mensaje de error.
     */
    dividir(a, b) {
        if (b === 0) {
            return 'No se puede dividir por 0';
        }
        return a / b;
    }

    /**
     * Calcula la potencia de un número.
     * @param {number} a - Base.
     * @param {number} b - Exponente.
     * @returns {number} Resultado de la potencia.
     */
    potencia(a, b) {
        return Math.pow(a, b);
    }

    /**
     * Calcula el factorial de un número de forma iterativa.
     * @param {number} n - Número para calcular el factorial.
     * @returns {number|string} Factorial del número o mensaje de error si es negativo.
     */
    factorial(n) {
        if (n < 0) return 'No existe factorial de números negativos';
        let resultado = 1;
        for (let i = 1; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

// Ejemplo de uso de la clase Calculadora
const calculadora = new Calculadora();
console.log(calculadora.sumar(5, 3)); // Suma de 5 + 3
console.log(calculadora.factorial(5)); // Factorial de 5
