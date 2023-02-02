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
    // Verifica se o valor de k é menor ou igual a n
    if (k > n) {
        throw new Error('O argumento "k" deve ser menor ou igual a "n"');
    }

    // Calcula o resultado da combinação usando a fórmula
    return fatorial(n) / (fatorial(k) * fatorial(n - k));
}

const trianguloDePascal=(n) => {
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
            // combinacao(i, j)
            let elemento = combinacao(i, j);

            // Adiciona o elemento à linha atual
            linha += elemento + ' ';
        }

        // Imprime a linha atual
        console.log(linha);
    }
}

trianguloDePascal(15);