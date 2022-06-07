const dino = document.querySelector('.dino');//pegar a class do css coma imagem do dino
const cerca = document.querySelector('.cerca');//pegar a class do css coma imagem da cerca

const pulo = () => { //criando a classe para executar a função depois de clicado
    dino.classList.add('pulo');//adicionar a class pulo no dino

    setTimeout(() =>  {
        dino.classList.remove('pulo'); // depois de 500 ms ele vai remover o pulo
    }, 500);
}

const loop = setInterval(() => {

    const cercaPosicao = cerca.offsetLeft;//pegar a proprierade left do css
    const dinoPosicao = parseInt(window.getComputedStyle(dino).bottom.replace('px'), 10);;//pegar qualquer proprierade do css no caso bottom e apagando o px que gera e depois com o + tranforma em número

    console.log(cercaPosicao);

    if (cercaPosicao <= 120 && cercaPosicao > 0 && dinoPosicao < 80) {//se a posição da cerca chegar em 105 
                              
        cerca.style.animation = 'none' ;//para a animação de tudo
        cerca.style.left = `${cercaPosicao}px`;//parar a cerca na posição 105
        
        dino.style.animation = 'none' ;//para a animação do dino
        dino.style.bottom = `${dinoPosicao}px`;//parar na posição que tá
    }

}, 10);

document.addEventListener('keydown', pulo);//escutar uma tecla clicada e execucar a função pulo