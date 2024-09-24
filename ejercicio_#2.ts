class Calculadora_v1 {
  /**
   * Suma dos números.
   * @param {number} a - Primer número.
   * @param {number} b - Segundo número.
   * @returns {number} Resultado de la suma.
   */
  public sumar(a: number, b: number): number {
      return a + b;
  }

  /**
   * Resta dos números.
   * @param {number} a - Minuendo.
   * @param {number} b - Sustraendo.
   * @returns {number} Resultado de la resta.
   */
  public restar(a: number, b: number): number {
      return a - b;
  }

  /**
   * Multiplica dos números.
   * @param {number} a - Primer número.
   * @param {number} b - Segundo número.
   * @returns {number} Resultado de la multiplicación.
   */
  public multiplicar(a: number, b: number): number {
      return a * b;
  }

  /**
   * Divide dos números si el divisor no es cero.
   * @param {number} a - Dividendo.
   * @param {number} b - Divisor.
   * @returns {number|string} Resultado de la división o mensaje de error.
   */
  public dividir(a: number, b: number): string | number {
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
  public potencia(a: number, b: number): number {
      return Math.pow(a, b);
  }

  /**
   * Calcula el factorial de un número de forma iterativa.
   * @param {number} n - Número para calcular el factorial.
   * @returns {number|string} Factorial del número o mensaje de error si es negativo.
   */
  public factorial(n: number): string | number {
      if (n < 0) return 'No existe factorial de números negativos';
      let resultado = 1;
      for (let i = 1; i <= n; i++) {
          resultado *= i;
      }
      return resultado;
  }
}

// Ejemplo de uso de la clase Calculadora
const calculadora_v1 = new Calculadora_v1();
console.log(calculadora_v1.sumar(5, 3)); // Suma de 5 + 3
console.log(calculadora_v1.factorial(5)); // Factorial de 5
