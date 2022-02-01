let numeroCartas = prompt("Escolha um número par entre 4 e 14 para jogar:")
let validacao = 0;
while(validacao<1){
if(numeroCartas > 14 || numeroCartas < 4 || numeroCartas%2 !== 0){
    numeroCartas = prompt("Escolha um número par entre 4 e 14 para jogar");
}else{
    validacao = 1;
}
}