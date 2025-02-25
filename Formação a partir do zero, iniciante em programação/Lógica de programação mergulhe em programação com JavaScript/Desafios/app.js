//Desafio 1

/*

alert("Boas vindas ao jogo do  número secreto");

let numeroSecreto = 59;

let palpite = prompt("Escolha um número entre 1 e 100");

//Comentário
if (numeroSecreto ==
    palpite) {
    console.log
    (`"você acertou, número secreto foi ${numeroSecreto}"`);
}
else (
    console.log("você errou")
);*/

//Desafio 2

/*
let diaSemana =  prompt('Qual o dia da semana?');

if(diaSemana == 'sábado' || diaSemana == 'domingo'){
    alert('Hoje é fim de semana')
}else{
    alert("Boa semana!")

let number = prompt('Insira um número para saber se é positivo ou negativo');

if ((number %= 2) === 0) {
    alert('O número é par')
} else {
    alert('O número é impar')
}
    }

let pontos = prompt('Insira os pontos que ganhou no jogo')

if(pontos >= 100){
    alert('Você venceu')
}else{
    alert('Tente novamente até ganhar')
}

let saldoConta = prompt('Insira o saldo da sua conta');Roger

alert(`O saldo da sua conta é ${saldoConta}`)

let nomeUsuario = prompt('Insira seu nome');

alert(`Boas-vindas ${nomeUsuario}`)

//Desafio 3

let cont = 1;

while (cont <= 10) { 
    
console.log(`Contador está no ${cont}`);
cont++;

}

let cont2 = 10;

while (cont2 >= 0) { 
    
console.log(`Contador está no ${cont2}`);
cont2--;

}


let number = prompt("Insira um número")
let cont = number;


while(cont >= 0){
    alert(`Contagem regresiva em ${cont}`);
    cont --;
}

alert(`Fim do contador!`)


let number = prompt("Insira um número")
let cont = 0;


while(cont < number){
    alert(`Contagem progressiva em ${cont}`);
    cont ++;
}

alert(`Fim da contagem! chegamos ao número inserido de ${number}`)


//Desafio 4

let mensagem = "boas vindas!"
console.log(mensagem);

let nome = "Roger"
console.log(`Olá, ${nome}`);

let linguagem = prompt("Qual a linguagem de programação que você mais gosta?")

console.log(linguagem);


let valor1 = 2;

let valor2 = 4;

let resultado = valor1 + valor2;

console.log(`A soma do ${valor1} e ${valor2} é igual a ${resultado}`);


let valor1 = 2;

let valor2 = 4;

let resultado = valor1 - valor2;

console.log(`A diferença do ${valor1} e ${valor2} é igual a ${resultado}`);


let idade = prompt("Qual sua idade?");

if(idade >= 18) {
    alert(`Pode beber, você tem ${idade} anos`)
}else{
    alert(`Não pode beber, você tem ${idade} anos `)
}
 

let numero = prompt('insira um valor');

if (((numero % 2) === 0) && numero != 0) {
    alert(`O ${numero} é positivo`)2
} else {
    if ((numero % 2) != 0) {
        alert(`O ${numero} é negativo`)
    }
    else {
        alert(`O número escolhido foi ${numero}, porém também é considerado positivo`)
    }
}
       

let number = 1;

while(number <= 10){
    alert(number);
    number ++;
}

let nota = 5
;

if(nota >= 7){
    alert("Aprovado")
}else{
    alert('reprovado')
}

*/

let number = parseInt(  Math.random() * 1000) + 1 ;

console.log(number);

