/* função para resolver a equação de segundo grau
função retorna array [x1,x2,delta] */
var solucao
function equacaoSegudoGrau(a, b, c) {
    delta = b ** 2 - 4 * a * c;
    let x1 = (-b + (Math.sqrt(delta))) / (2 * a);
    let x2 = (-b - (Math.sqrt(delta))) / (2 * a);
    solucao = [x1,x2,delta]
    console.log(solucao)
    return solucao;
}

const botaoCalcular = document.querySelector("[data-botao]")

botaoCalcular.addEventListener("click", (evento) => {
    evento.preventDefault()
    const a = document.querySelectorAll("[data-parametros='a']")[0].value
    const b = document.querySelectorAll("[data-parametros='b']")[0].value
    const c = document.querySelectorAll("[data-parametros='c']")[0].value

    equacaoSegudoGrau(a,b,c)

    document.querySelectorAll("[data-respostas]")[0].placeholder = solucao[0]
    document.querySelectorAll("[data-respostas]")[1].placeholder = solucao[1]
    document.querySelectorAll("[data-respostas]")[2].placeholder = solucao[2]

})
