function fatorial(n) {
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

function combinacao(n, k) {
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

function permutacao(n, k) {
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

    // Calcula o resultado da permutação usando a fórmula
    return fatorial(n) / fatorial(n - k);
}

function trianguloDePascal(n) {
    if (typeof combinacao !== 'function') {
        throw new Error('A função "combinacao" não foi importada corretamente');
    }

    if (typeof permutacao !== 'function') {
        throw new Error('A função "permutacao" não foi importada corretamente');
    }

    // Verifica se o argumento passado é um número inteiro positivo
    if (typeof n !== 'number' || n < 0 || n % 1 !== 0 || n > 20) {
        throw new Error(
            'O argumento deve ser um número inteiro positivo menor ou igual a 20'
        );
    }

    // Loop que percorre cada linha do triângulo de Pascal
    for (let i = 0; i <= n; i++) {
        let linha = '';

        // Loop que percorre cada elemento da linha atual
        for (let j = 0; j <= i; j++) {
            // Calcula o elemento da linha atual usando a fórmula binomial(i, j) =
            // combinacao(i, j) * permutacao(i, j)
            let elemento = combinacao(i, j) * permutacao(i, j);

            // Adiciona o elemento à linha atual
            linha += elemento + ' ';
        }

        // Imprime a linha atual
        console.log(linha);
    }
}

console.log(trianguloDePascal(15))