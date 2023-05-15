
const botaoAlterarTema = document.getElementById("botao-alterar-tema");


const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");



botaoAlterarTema.addEventListener("click", () => {


   
    const modoEscuroeEstaAtivo = body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro");

    if (modoEscuroeEstaAtivo) {
        

        
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/imagens/sun.png");


    } else {
    
        
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/imagens/moon.png");

    }












});