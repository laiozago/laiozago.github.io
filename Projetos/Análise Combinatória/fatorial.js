const fatorial=(n) => {
    // Verifica se o argumento passado é um número inteiro positivo
    if (typeof n !== 'number' || n < 0 || n % 1 !== 0 || n > 120) {
        throw new Error(
            'O argumento deve ser um número inteiro positivo menor ou igual a 120'
        );
    }

    // Se o argumento for zero, o fatorial é 1
    if (n === 0) {
        return 1;
    }

    // Senão, calcula o fatorial usando a chamada recursiva
    return n * fatorial(n - 1);
}

console.log(fatorial(10));