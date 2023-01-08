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

const combinacao=(n, k) => {
    // Verifica se os argumentos passados são números inteiros positivos
    if (typeof n !== 'number' || n < 0 || n % 1 !== 0 || n > 120) {
        throw new Error(
            'O argumento "n" deve ser um número inteiro positivo menor ou igual a 120'
        );
    }

    if (typeof k !== 'number' || k < 0 || k % 1 !== 0 || k > 120) {
        throw new Error(
            'O argumento "k" deve ser um número inteiro positivo menor ou igual a 120'
        );
    }

    // Verifica se o valor de k é menor ou igual a n
    if (k > n) {
        throw new Error('O argumento "k" deve ser menor ou igual a "n"');
    }

    // Calcula o resultado da combinação usando a fórmula
    return fatorial(n) / (fatorial(k) * fatorial(n - k));
}

//console.log(combinacao(10,2));