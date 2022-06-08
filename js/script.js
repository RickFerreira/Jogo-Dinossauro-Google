const dino = document.querySelector('.dino');//pegar a class do css coma imagem do dino
const vaca = document.querySelector('.vaca');//pegar a class do css coma imagem da vaca
const nuvem = document.querySelector('.nuvem');//pegar a class do css coma imagem da vaca

const pulo = () => { //criando a classe para executar a função depois de clicado
    dino.classList.add('pulo');//adicionar a class pulo no dino

    setTimeout(() =>  {
        dino.classList.remove('pulo'); // depois de 500 ms ele vai remover o pulo
    }, 500);
}


const loop = setInterval(() => {

    const vacaPosicao = vaca.offsetLeft;//pegar a proprierade left do css
    const dinoPosicao = parseInt(window.getComputedStyle(dino).bottom.replace('px'), 10);//pegar qualquer proprierade do css no caso bottom e apagando o px que gera e depois tranforma em int
    const nuvemPosicao = parseInt(window.getComputedStyle(nuvem).right.replace('px'), 10);//pegar qualquer proprierade do css no caso right e apagando o px que gera e depois tranforma em int

    if (dinoPosicao > 0) {
        dino.src = './img/pulo.png';//trocando a imagem quando pular
        dino.style.width = '200px';//aumentando a imagem
    }else{
        dino.src = './img/dino.gif';//trocando a imagem quando pular
        dino.style.width = '150px';//aumentando a imagem
    }

    if (vacaPosicao <= 120 && vacaPosicao > 0 && dinoPosicao < 80) {//se a posição da vaca chegar em 105 
                              
        vaca.style.animation = 'none' ;//para a animação de tudo
        vaca.style.left = `${vacaPosicao}px`;//parar a vaca na posição 105
        
        dino.style.animation = 'none' ;//para a animação do dino
        dino.style.bottom = `${dinoPosicao}px`;//parar na posição que tá
        
        dino.src = './img/meteoro.png';//trocando a imagem quando perder
        dino.style.width = '300px';//aumentando a imagem
        
        vaca.style.width = '1px';//diminuindo a imagem

        nuvem.style.animation = 'none' ;//para a animação do nuvem
        nuvem.style.right = `${nuvemPosicao}px`;//parar na posição que tá
    }

}, 10);

document.addEventListener('keydown', pulo);//escutar uma tecla clicada e execucar a função pulo