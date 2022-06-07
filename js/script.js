const dino = document.querySelector(".dino");//pegar a class do css coma imagem do dino
const cerca = document.querySelector(".cerca");//pegar a class do css coma imagem da cerca

const pulo = () => { //criando a classe para executar a função depois de clicado
    dino.classList.add("pulo");//adicionar a class pulo no dino

    setTimeout(() =>  {

        dino.classList.remove("pulo"); // depois de 500 ms ele vai remover o pulo

    }, 500);
}

const loop = setInterval(() => {
    const cercaPosicao = cerca.offsetLeft

    if (cercaPosicao <= 105) {
        
        cerca.style.animation = "none" ;
        cerca.style.left = "${cercaPosicao}px";
    }
}, 10);

document.addEventListener("keydown", pulo);//escutar uma tecla clicada e execucar a função pulo