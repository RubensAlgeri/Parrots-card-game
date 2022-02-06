let numeroCartas=0;
let validacao = 0;
let cartasContadas = [];
let primeiraCarta;
let segundaCarta;
let contagem = 0;
let carta1;
let carta2;
let vencer = 0;
let numeroJogadas = 0;
let respostaSatisfatoria = 0;

while(validacao<1){
if(numeroCartas > 14 || numeroCartas < 4 || numeroCartas%2 !== 0){
    numeroCartas = prompt("Escolha um número par entre 4 e 14 para jogar");
}else{
    validacao = 1;
}
}
const cartas = [
`<div class="carta" data-identifier="card">
<div onclick="cartaClicada(this)" class="frente face" data-identifier="back-face">
    <img src="/imagens/front.png" alt="Frente da Carta">
</div>
<figure class="verso face" data-identifier="front-face">
    <img src="/gifs/bobrossparrot.gif" alt="bobrossparrot">
</figure>
</div>`,

`<div class="carta" data-identifier="card">
<div onclick="cartaClicada(this)" class="frente face" data-identifier="back-face">
    <img src="/imagens/front.png" alt="Frente da Carta">
</div>
<figure class="verso face" data-identifier="front-face">
    <img src="/gifs/bobrossparrot.gif" alt="bobrossparrot">
</figure>
</div>`,

`<div class="carta" data-identifier="card">
<div onclick="cartaClicada(this)" class="frente face" data-identifier="back-face">
    <img src="/imagens/front.png" alt="Frente da Carta">
</div>
<figure class="verso face" data-identifier="front-face">
    <img src="/gifs/explodyparrot.gif" alt="explodyparrot">
</figure>
</div>`,

`<div class="carta" data-identifier="card">
<div onclick="cartaClicada(this)" class="frente face" data-identifier="back-face">
    <img src="/imagens/front.png" alt="Frente da Carta">
</div>
<figure class="verso face" data-identifier="front-face">
    <img src="/gifs/explodyparrot.gif" alt="explodyparrot">
</figure>
</div>`,

`<div class="carta" data-identifier="card">
<div onclick="cartaClicada(this)" class="frente face" data-identifier="back-face">
    <img src="/imagens/front.png" alt="Frente da Carta">
</div>
<figure class="verso face" data-identifier="front-face">
    <img src="/gifs/fiestaparrot.gif" alt="fiestaparrot">
</figure>
</div>`,

`<div class="carta" data-identifier="card">
<div onclick="cartaClicada(this)" class="frente face" data-identifier="back-face">
    <img src="/imagens/front.png" alt="Frente da Carta">
</div>
<figure class="verso face" data-identifier="front-face">
    <img src="/gifs/fiestaparrot.gif" alt="fiestaparrot">
</figure>
</div>`,

`<div class="carta" data-identifier="card">
<div onclick="cartaClicada(this)" class="frente face" data-identifier="back-face">
    <img src="/imagens/front.png" alt="Frente da Carta">
</div>
<figure class="verso face" data-identifier="front-face">
    <img src="/gifs/metalparrot.gif" alt="metalparrot">
</figure>
</div>`,

`<div class="carta" data-identifier="card">
<div onclick="cartaClicada(this)" class="frente face" data-identifier="back-face">
    <img src="/imagens/front.png" alt="Frente da Carta">
</div>
<figure class="verso face" data-identifier="front-face">
    <img src="/gifs/metalparrot.gif" alt="metalparrot">
</figure>
</div>`,

`<div class="carta" data-identifier="card">
<div onclick="cartaClicada(this)" class="frente face" data-identifier="back-face">
    <img src="/imagens/front.png" alt="Frente da Carta">
</div>
<figure class="verso face" data-identifier="front-face">
    <img src="/gifs/revertitparrot.gif" alt="revertitparrot">
</figure>
</div>`,

`<div class="carta" data-identifier="card">
<div onclick="cartaClicada(this)" class="frente face" data-identifier="back-face">
    <img src="/imagens/front.png" alt="Frente da Carta">
</div>
<figure class="verso face" data-identifier="front-face">
    <img src="/gifs/revertitparrot.gif" alt="revertitparrot">
</figure>
</div>`,

`<div class="carta" data-identifier="card">
<div onclick="cartaClicada(this)" class="frente face" data-identifier="back-face">
    <img src="/imagens/front.png" alt="Frente da Carta">
</div>
<figure class="verso face" data-identifier="front-face">
    <img src="/gifs/tripletsparrot.gif" alt="tripletsparrot">
</figure>
</div>`,

`<div onclick="cartaClicada(this) " class="carta" data-identifier="card">
<div onclick="cartaClicada(this)" class="frente face" data-identifier="back-face">
    <img src="/imagens/front.png" alt="Frente da Carta">
</div>
<figure class="verso face" data-identifier="front-face">
    <img src="/gifs/tripletsparrot.gif" alt="tripletsparrot">
</figure>
</div>`,

`<div class="carta" data-identifier="card">
<div onclick="cartaClicada(this)" class="frente face" data-identifier="back-face">
    <img src="/imagens/front.png" alt="Frente da Carta">
</div>
<figure class="verso face" data-identifier="front-face">
    <img src="/gifs/unicornparrot.gif" alt="unicornparrot">
</figure>
</div>`,

`<div class="carta" data-identifier="card">
<div onclick="cartaClicada(this)" class="frente face" data-identifier="back-face">
    <img src="/imagens/front.png" alt="Frente da Carta">
</div>
<figure class="verso face" data-identifier="front-face">
    <img src="/gifs/unicornparrot.gif" alt="unicornparrot">
</figure>
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
    virar.parentNode.querySelector(".verso").style.transform ="rotateY(0deg)";
    virar.parentNode.querySelector(".frente").style.transform ="rotateY(-180deg)";
}
let intervalo;

function cartaClicada(cartaSelecionada){
    respostaSatisfatoria = 0;
    if(contagem===0){
    intervalo = setInterval(aumentarContagem, 1000);
    contagem = 1;
    }
    virarCarta(cartaSelecionada);
    if(contagem === 1){
        carta1 = cartaSelecionada.parentNode;
        primeiraCarta = cartaSelecionada.parentNode.querySelector("figure img").alt;
        contagem = 2;
        numeroJogadas++;
    }else if(contagem === 2){
        contagem = 3;
        document.querySelectorAll(".frente").onclick = "";
        carta2 = cartaSelecionada.parentNode;
        segundaCarta = cartaSelecionada.parentNode.querySelector("figure img").alt;
        numeroJogadas++;
        selecionarCartas();
        if(primeiraCarta !== segundaCarta){
            setTimeout(desvirar, 1000);
            setTimeout(deselecionarCartas, 1000);
        }else{
            deselecionarCartas();
            vencer++;
            contagem = 1;
            if (vencer === numeroCartas / 2) {
                clearInterval(intervalo);
                alert(`Você ganhou em ${numeroJogadas} jogadas!`);
                while (respostaSatisfatoria < 1) {
                    let resposta = prompt("Quer jogar novamente? s/n");
                    if (resposta === 's') {
                        relogio.innerHTML = 0;
                        respostaSatisfatoria = 2;
                        contagem = 0;
                        vencer = 0;
                        numeroJogadas = 0;
                        clearInterval(intervalo);
                        const deClasses = document.querySelectorAll(".verso")

                        deClasses.forEach(element => {
                            element.style.transform = "rotateY(180deg)";
                        });
                        const dClasses = document.querySelectorAll(".frente")

                        dClasses.forEach(element => {
                            element.style.transform = "rotateY(0deg)";
                        });
                    } else if (resposta === 'n') {
                        alert("Obrigado por jogar, volte sempre!!!")
                        respostaSatisfatoria = 2;
                    }else{
                        alert("Por favor digite apenas s para sim ou n para não.");                        
                    }
                }
            }
        }
    }
}
function desvirar(){
    carta1.querySelector(".verso").style.transform ="rotateY(180deg)";
    carta1.querySelector(".frente").style.transform ="rotateY(0deg)";
    carta2.querySelector(".verso").style.transform ="rotateY(180deg)";
    carta2.querySelector(".frente").style.transform ="rotateY(0deg)";
    contagem = 1;
}
const relogio = document.querySelector(".relogio");

function aumentarContagem(){
    relogio.innerHTML = parseInt(relogio.innerHTML) + 1;
}

function selecionarCartas(){
const demoClasses = document.querySelectorAll('.frente');

demoClasses.forEach(element => {
    element.removeAttribute("onclick");
});
}

function deselecionarCartas(){
    const demClasses = document.querySelectorAll('.frente');
    
    demClasses.forEach(element => {
        element.setAttribute("onclick", "cartaClicada(this);");
    });
    }