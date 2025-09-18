 let titulo = document.getElementById('titulo').innerHTML; // Troca o nome para Lars
console.log(titulo);

document.getElementById("titulo").innerHTML = "Lars" // Também

//Exercício 1

let nome = window.prompt("Digite seu nome?"); // Recebe nome
let idade = window.prompt("Qual a sua idade?"); // Recebe idade
let ano = window.prompt("Qual o ano atual?"); // Recebe ano

let nasc = ano - idade // O nascimento vai ser ano - idade
let resposta = "Olá" + nome + ", o seu ano de nascimento é "+ nasc // A variável resposta vai ser isto

 document.getElementById("resposta_e1").innerHTML = resposta // vai mostrar a resposta quando receber os dados

//usando função
function exibeMensagem(texto){
    console.log(texto)
}
function exibeMensagemComParametro(texto){
    console.log(texto)
}
exibeMensagem(texto);
exibeMensagem(texto);
exibeMensagem(texto);
exibeMensagem(texto);
exibeMensagemComParametro("texto 1");
exibeMensagemComParametro("texto 2");
exibeMensagemComParametro("texto 3");

function soma(a,b){
    let c = a + b;
    console.log(c);
}

function mult(a,b){
    let c = a * b;
    console.log(c);
}

function imprimeTexto(){
    let texto = document.getElementById("in_text").value;
    console.log(texto);
}

function imprimeIncrementos(){
    let x = parseInt(document.getElementById("in_ex2").value);
    document.getElementById("resposta_e2").innerHTML = ""
    for (let i = 0; i < x;   i++){
        console.log(i);
        let resposta = document.getElementById("resposta_e2").innerHTML + "";
        document.getElementById("resposta_e2").innerHTML == resposta;
}
}

function imprimeSoma(){
    let a = parseInt(document.getElementById("in_1_e3").value)
    let b = parseInt(document.getElementById("in_2_e3").value)

    let c = soma(a,b);
    document.getElementById("resposta_e3").innerHTML = c
}

function imprimeCalculo(){
    let a = parseInt(document.getElementById("in_1_e4").value)
    let b = parseInt(document.getElementById("in_2_e4").value)

    let c = 0
    if (a < 0 || b < 0){
        c= soma (a,b);
    } else {
        c = mult(a,b);
    }
    document.getElementById("resposta_e4").innerHTML = c
}