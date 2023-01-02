/* função para conferir se triangulo existe ou não */
function esseTrianguloExiste(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
  }
  
  
  const botaoConferir = document.querySelector("[data-botao]");

  botaoConferir.addEventListener("click", (evento) => {
    evento.preventDefault();
    const a = Number(document.querySelectorAll("[data-parametros='a']")[0].value);
    const b = Number(document.querySelectorAll("[data-parametros='b']")[0].value);
    const c = Number(document.querySelectorAll("[data-parametros='c']")[0].value);
  
    const existe = esseTrianguloExiste(a, b, c);
  
    if (existe) {
      document.querySelector("[data-resposta]").placeholder = "existe";
    } else {
      document.querySelector("[data-resposta]").placeholder = "não existe";
    }
  });
  