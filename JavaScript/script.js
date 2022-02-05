let numeroCartas = prompt("Escolha um número par entre 4 e 14 para jogar:")
let validacao = 0;
let cartasContadas = [];

while(validacao<1){
if(numeroCartas > 14 || numeroCartas < 4 || numeroCartas%2 !== 0){
    numeroCartas = prompt("Escolha um número par entre 4 e 14 para jogar");
}else{
    validacao = 1;
}
}
const cartas = [
`<div onclick="cartaClicada(this)" class="carta" data-identifier="card">
<div class="frente face" data-identifier="back-face">
    <img src="/imagens/front.png" alt="Frente da Carta">
</div>
<div class="verso face" data-identifier="front-face">
    <img src="/gifs/bobrossparrot.gif" alt="">
</div>
</div>`,

`<div onclick="cartaClicada(this)" class="carta" data-identifier="card">
<div class="frente face" data-identifier="back-face">
    <img src="/imagens/front.png" alt="Frente da Carta">
</div>
<div class="verso face" data-identifier="front-face">
    <img src="/gifs/bobrossparrot.gif" alt="">
</div>
</div>`,

`<div onclick="cartaClicada(this)" class="carta" data-identifier="card">
<div class="frente face" data-identifier="back-face">
    <img src="/imagens/front.png" alt="Frente da Carta">
</div>
<div class="verso face" data-identifier="front-face">
    <img src="/gifs/explodyparrot.gif" alt="">
</div>
</div>`,

`<div onclick="cartaClicada(this)" class="carta" data-identifier="card">
<div class="frente face" data-identifier="back-face">
    <img src="/imagens/front.png" alt="Frente da Carta">
</div>
<div class="verso face" data-identifier="front-face">
    <img src="/gifs/explodyparrot.gif" alt="">
</div>
</div>`,

`<div onclick="cartaClicada(this)" class="carta" data-identifier="card">
<div class="frente face" data-identifier="back-face">
    <img src="/imagens/front.png" alt="Frente da Carta">
</div>
<div class="verso face" data-identifier="front-face">
    <img src="/gifs/fiestaparrot.gif" alt="">
</div>
</div>`,

`<div onclick="cartaClicada(this)" class="carta" data-identifier="card">
<div class="frente face" data-identifier="back-face">
    <img src="/imagens/front.png" alt="Frente da Carta">
</div>
<div class="verso face" data-identifier="front-face">
    <img src="/gifs/fiestaparrot.gif" alt="">
</div>
</div>`,

`<div onclick="cartaClicada(this)" class="carta" data-identifier="card">
<div class="frente face" data-identifier="back-face">
    <img src="/imagens/front.png" alt="Frente da Carta">
</div>
<div class="verso face" data-identifier="front-face">
    <img src="/gifs/metalparrot.gif" alt="">
</div>
</div>`,

`<div onclick="cartaClicada(this)" class="carta" data-identifier="card">
<div class="frente face" data-identifier="back-face">
    <img src="/imagens/front.png" alt="Frente da Carta">
</div>
<div class="verso face" data-identifier="front-face">
    <img src="/gifs/metalparrot.gif" alt="">
</div>
</div>`,

`<div onclick="cartaClicada(this)" class="carta" data-identifier="card">
<div class="frente face" data-identifier="back-face">
    <img src="/imagens/front.png" alt="Frente da Carta">
</div>
<div class="verso face" data-identifier="front-face">
    <img src="/gifs/revertitparrot.gif" alt="">
</div>
</div>`,

`<div onclick="cartaClicada(this)" class="carta" data-identifier="card">
<div class="frente face" data-identifier="back-face">
    <img src="/imagens/front.png" alt="Frente da Carta">
</div>
<div class="verso face" data-identifier="front-face">
    <img src="/gifs/revertitparrot.gif" alt="">
</div>
</div>`,

`<div onclick="cartaClicada(this)" class="carta" data-identifier="card">
<div class="frente face" data-identifier="back-face">
    <img src="/imagens/front.png" alt="Frente da Carta">
</div>
<div class="verso face" data-identifier="front-face">
    <img src="/gifs/tripletsparrot.gif" alt="">
</div>
</div>`,

`<div onclick="cartaClicada(this) " class="carta" data-identifier="card">
<div class="frente face" data-identifier="back-face">
    <img src="/imagens/front.png" alt="Frente da Carta">
</div>
<div class="verso face" data-identifier="front-face">
    <img src="/gifs/tripletsparrot.gif" alt="">
</div>
</div>`,

`<div onclick="cartaClicada(this)" class="carta" data-identifier="card">
<div class="frente face" data-identifier="back-face">
    <img src="/imagens/front.png" alt="Frente da Carta">
</div>
<div class="verso face" data-identifier="front-face">
    <img src="/gifs/unicornparrot.gif" alt="">
</div>
</div>`,

`<div onclick="cartaClicada(this), virarCarta(this)" class="carta" data-identifier="card">
<div class="frente face" data-identifier="back-face">
    <img src="/imagens/front.png" alt="Frente da Carta">
</div>
<div class="verso face" data-identifier="front-face">
    <img src="/gifs/unicornparrot.gif" alt="">
</div>
</div>`
];


function comparador() { 
	return Math.random() - 0.5;
}
for(let i=0;i<numeroCartas;i++){
cartasContadas.push(cartas[i]);
cartasContadas.sort(comparador);
}

for(let contador = 0; contador < numeroCartas; contador++){
    document.querySelector("main").innerHTML += cartasContadas[contador];
}

function virarCarta(virar){
    virar.querySelector(".vers").classlist.add(verso)
    virar.querySelector(".frent").classlist.add(frente)
}

function cartaClicada(cartaSelecionada){
    let contagem = 1;
    let primeiraCarta;
    let segundaCarta;
    if(contagem===1){
        primeiraCarta = cartaSelecionada.querySelector(".verso img").innerHTML;
        contagem = 2;
    }else if(contagem === 2){
        segundaCarta = cartaSelecionada.querySelector(".verso img").innerHTML;
        if(primeiraCarta === segundaCarta){

        }else{

        }
    }
}

