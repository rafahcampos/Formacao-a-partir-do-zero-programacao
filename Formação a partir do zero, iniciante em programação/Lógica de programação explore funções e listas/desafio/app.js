/*let titulo = document.querySelector('h1');

titulo.innerHTML = 'Hora od desafio';

function botaoConsole(){
    console.log('O botão foi clicado');
    
}

function botaoAlert(){
    console.log('Eu amo JS');
    
}

function botaoPrompt(){
let cidade =  prompt('Qual o nome de uma cidade do Brasil');
alert(`Estive na ${cidade} e lembrei de você`)
}

function botaoSoma(){
    let number1 = parseInt( prompt('primeiro numero'))
    let number2 = parseInt( prompt('segundo numero'))
    let soma = (number1 + number2)
    

    alert(`A soma do ${number1} com o ${number2} é de ${soma}`)
}
    */

/*
//Desafio 2

/*
Criar uma função que exibe "Olá, mundo!" no console.

Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

Criar uma função que recebe três números como parâmetros e retorna a média deles.

Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo


//let nome = prompt("Qual o seu nome?")
//let number = prompt("Entre com um número.")
let number1 = parseInt( prompt("Entre com o primeiro numero"));
//let number2 = parseInt( prompt("Entre com o segundo numero"));
//let number3 = parseInt( prompt("Entre com o terceiro numero"));

//console.log(
   // typeof (number1));

//media = mediaOfANumber(number1, number2, number3);

//console.log(
  //  typeof (media));

//console.log(`A média dos números: ${number1}, ${number2}, ${number3}} é: ${media}`);


//olaMundo();
//olaPerson(nome)
//doubleOfNumber(number);
//let highter = highterNumber(number1, number2);
//console.log(`O maior numero entre ${number1} e ${number2} é ${highter}`);
console.log(`O do bro do número ${number1} é ${doubleTheSameNumber(number1)}`);



function olaMundo() {
    console.log('Olá mundo!');
}

function olaPerson(nome) {
    console.log(`Olá, ${nome}`);
}

function doubleOfNumber(number) {
    console.log(number * 2);
}

function mediaOfANumber(number1, number2, number3) {
    return media = (number1 + number2 + number3) / 3;
}

function highterNumber(number1, number2){
    return number1 > number2 ? number1 : number2;
}

function doubleTheSameNumber(number1){
    return number1 * number1;
}

//Desafio 4
Crie uma lista vazia, com o nome listaGenerica.
Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
Crie uma lista com 3 nomes e exiba no console apenas o último elemento.


let listaGenerica = [];
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Phyton'];

linguagensDeProgramacao.push('Java' , 'Ruby', 'GoLang');
console.log(linguagensDeProgramacao);
*/
let listaNomes = ["Amanda", "Rodrigo", "Yenifer"];
console.log(listaNomes[2]);
