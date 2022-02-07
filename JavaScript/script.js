let numeroCartas;
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
let intervalo;
const relogio = document.querySelector(".relogio");

const cartas = [
    `<article class="carta" data-identifier="card">
    <div onclick="cartaClicada(this)" class="verso face" data-identifier="back-face">
        <img src="imagens/front.png" alt="verso da Carta">
    </div>
    <figure class="frente face" data-identifier="front-face">
        <img src="gifs/bobrossparrot.gif" alt="bobrossparrot">
    </figure>
</article>`,

    `<article class="carta" data-identifier="card">
    <div onclick="cartaClicada(this)" class="verso face" data-identifier="back-face">
        <img src="imagens/front.png" alt="verso da Carta">
    </div>
    <figure class="frente face" data-identifier="front-face">
        <img src="gifs/bobrossparrot.gif" alt="bobrossparrot">
    </figure>
</article>`,

    `<article class="carta" data-identifier="card">
    <div onclick="cartaClicada(this)" class="verso face" data-identifier="back-face">
        <img src="imagens/front.png" alt="verso da Carta">
    </div>
    <figure class="frente face" data-identifier="front-face">
        <img src="gifs/explodyparrot.gif" alt="explodyparrot">
    </figure>
</article>`,

    `<article class="carta" data-identifier="card">
    <div onclick="cartaClicada(this)" class="verso face" data-identifier="back-face">
        <img src="imagens/front.png" alt="verso da Carta">
    </div>
    <figure class="frente face" data-identifier="front-face">
        <img src="gifs/explodyparrot.gif" alt="explodyparrot">
    </figure>
</article>`,

    `<article class="carta" data-identifier="card">
    <div onclick="cartaClicada(this)" class="verso face" data-identifier="back-face">
        <img src="imagens/front.png" alt="verso da Carta">
    </div>
    <figure class="frente face" data-identifier="front-face">
        <img src="gifs/fiestaparrot.gif" alt="fiestaparrot">
    </figure>
</article>`,

    `<article class="carta" data-identifier="card">
    <div onclick="cartaClicada(this)" class="verso face" data-identifier="back-face">
        <img src="imagens/front.png" alt="verso da Carta">
    </div>
    <figure class="frente face" data-identifier="front-face">
        <img src="gifs/fiestaparrot.gif" alt="fiestaparrot">
    </figure>
</article>`,

    `<article class="carta" data-identifier="card">
    <div onclick="cartaClicada(this)" class="verso face" data-identifier="back-face">
        <img src="imagens/front.png" alt="verso da Carta">
    </div>
    <figure class="frente face" data-identifier="front-face">
        <img src="gifs/metalparrot.gif" alt="metalparrot">
    </figure>
</article>`,

    `<article class="carta" data-identifier="card">
    <div onclick="cartaClicada(this)" class="verso face" data-identifier="back-face">
        <img src="imagens/front.png" alt="verso da Carta">
    </div>
    <figure class="frente face" data-identifier="front-face">
        <img src="gifs/metalparrot.gif" alt="metalparrot">
    </figure>
</article>`,

    `<article class="carta" data-identifier="card">
    <div onclick="cartaClicada(this)" class="verso face" data-identifier="back-face">
        <img src="imagens/front.png" alt="verso da Carta">
    </div>
    <figure class="frente face" data-identifier="front-face">
        <img src="gifs/revertitparrot.gif" alt="revertitparrot">
    </figure>
</article>`,

    `<article class="carta" data-identifier="card">
    <div onclick="cartaClicada(this)" class="verso face" data-identifier="back-face">
        <img src="imagens/front.png" alt="verso da Carta">
    </div>
    <figure class="frente face" data-identifier="front-face">
        <img src="gifs/revertitparrot.gif" alt="revertitparrot">
    </figure>
</article>`,

    `<article class="carta" data-identifier="card">
    <div onclick="cartaClicada(this)" class="verso face" data-identifier="back-face">
        <img src="imagens/front.png" alt="verso da Carta">
    </div>
    <figure class="frente face" data-identifier="front-face">
        <img src="gifs/tripletsparrot.gif" alt="tripletsparrot">
    </figure>
</article>`,

    `<article class="carta" data-identifier="card">
    <div onclick="cartaClicada(this)" class="verso face" data-identifier="back-face">
        <img src="imagens/front.png" alt="verso da Carta">
    </div>
    <figure class="frente face" data-identifier="front-face">
        <img src="gifs/tripletsparrot.gif" alt="tripletsparrot">
    </figure>
</article>`,

    `<article class="carta" data-identifier="card">
    <div onclick="cartaClicada(this)" class="verso face" data-identifier="back-face">
        <img src="imagens/front.png" alt="verso da Carta">
    </div>
    <figure class="frente face" data-identifier="front-face">
        <img src="gifs/unicornparrot.gif" alt="unicornparrot">
    </figure>
</article>`,

    `<article class="carta" data-identifier="card">
    <div onclick="cartaClicada(this)" class="verso face" data-identifier="back-face">
        <img src="imagens/front.png" alt="verso da Carta">
    </div>
    <figure class="frente face" data-identifier="front-face">
        <img src="gifs/unicornparrot.gif" alt="unicornparrot">
        </figure>
<articlev>`
];

iniciar();

distribuirCartas();

function cartaClicada(cartaSelecionada) {

    respostaSatisfatoria = 0; //Essa variavel controla o while da pergunta jogar novamente

    if (contagem === 0) { //Esse if só serve para iniciar o contador ao clicar

        intervalo = setInterval(aumentarContagem, 1000);
        contagem = 1;
    }

    virarCarta(cartaSelecionada);

    if (contagem === 1) { // Este if e else if irão armazenar a primeira e segunda carta clicadas

        carta1 = cartaSelecionada.parentNode;
        primeiraCarta = cartaSelecionada.parentNode.querySelector("figure img").alt;
        numeroJogadas++;
        contagem = 2;

    } else if (contagem === 2) {

        document.querySelectorAll(".verso").onclick = "";
        carta2 = cartaSelecionada.parentNode;
        segundaCarta = cartaSelecionada.parentNode.querySelector("figure img").alt;
        numeroJogadas++;
        contagem = 3;
        desabilitarClick();

        if (primeiraCarta !== segundaCarta) { //O valor de comparação das cartas é através do atributo alt das mesmas

            setTimeout(desvirar, 1000);
            setTimeout(habilitarClick, 1000);

        } else {

            habilitarClick();
            vencer++;
            contagem = 1;

            if (vencer === numeroCartas / 2) {

                clearInterval(intervalo);
                alert(`Você ganhou em ${numeroJogadas} jogadas!`);

                while (respostaSatisfatoria < 1) {

                    let resposta = prompt("Quer jogar novamente? s/n");

                    if (resposta === 's') {

                        relogio.innerHTML = 0;
                        validacao = 0;
                        respostaSatisfatoria = 2;
                        contagem = 0;
                        vencer = 0;
                        numeroJogadas = 0;
                        cartasContadas = [];

                        clearInterval(intervalo);

                        removerCartas();

                        iniciar();
                        distribuirCartas();

                    } else if (resposta === 'n') {

                        alert("Obrigado por jogar, volte sempre!!!")
                        respostaSatisfatoria = 2;

                    } else {
                        alert("Por favor digite apenas s para sim ou n para não.");
                    }
                }
            }
        }
    }
}
function iniciar() {
    while (validacao < 1) {
        numeroCartas = prompt("Escolha um número par entre 4 e 14 para jogar");
        if (numeroCartas > 14 || numeroCartas < 4 || numeroCartas % 2 !== 0) {
            numeroCartas = prompt("Escolha um número par entre 4 e 14 para jogar");
        } else {
            validacao = 1;
        }
    }
}

function comparador() {
    return Math.random() - 0.5;
}
function distribuirCartas() {
    for (let i = 0; i < numeroCartas; i++) {
        cartasContadas.push(cartas[i]);
        cartasContadas.sort(comparador);
    }

    for (let contador = 0; contador < numeroCartas; contador++) {
        document.querySelector("main").innerHTML += cartasContadas[contador];
    }
}

function virarCarta(virar) {

    virar.parentNode.querySelector(".frente").style.transform = "rotateY(0deg)";
    virar.parentNode.querySelector(".verso").style.transform = "rotateY(-180deg)";
}

function desvirar() {

    carta1.querySelector(".frente").style.transform = "rotateY(180deg)";
    carta1.querySelector(".verso").style.transform = "rotateY(0deg)";
    carta2.querySelector(".frente").style.transform = "rotateY(180deg)";
    carta2.querySelector(".verso").style.transform = "rotateY(0deg)";
    contagem = 1;
}

function aumentarContagem() {

    relogio.innerHTML = parseInt(relogio.innerHTML) + 1;
}

function desabilitarClick() {

    const demoClasses = document.querySelectorAll('.verso');

    demoClasses.forEach(element => {
        element.removeAttribute("onclick");
    });
}

function habilitarClick() {

    const demClasses = document.querySelectorAll('.verso');

    demClasses.forEach(element => {
        element.setAttribute("onclick", "cartaClicada(this);");
    });
}

function removerCartas() {

    const deClasses = document.querySelectorAll("article")

    deClasses.forEach(element => {
        element.remove();
    });
}