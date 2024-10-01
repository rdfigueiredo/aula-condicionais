//Aula 08 Condicionais
/* Exercício 01
Crie uma função que:
● Recebe 2 números (chamaremos de num1 e num2)
● Compara esses números entre si:
○ Se os números forem iguais, retorna uma mensagem
de sucesso
Depois, chame a função com números que foram inseridos
pelo usuário através do prompt */



let a = Number(prompt("Digite um número:"))
let b = Number(prompt("Digite outro número:"))

function comparar(num1, num2) {
    if (num1 === num2)
        console.log("São iguais!")
}

comparar(a, b) 
//se números diferentes digitados pelo usuário nada aprecerá
//se números iguais digitados será impresso "São iguais!" 



/* Exercício 02
Crie uma função que:
● Recebe 2 números (chamaremos de num1 e num2)
● Compara esses números entre si:
○ Retorna mensagens dizendo se os números são
iguais ou diferentes
Depois, chame a função com números que foram inseridos
pelo usuário através do prompt */


let a = Number(prompt("Digite um número:"))
let b = Number(prompt("Digite outro número:"))

function comparar(num1, num2) {
    if (num1 === num2) {
        console.log("São iguais!")
    } else {
        console.log("Não são iguais!")
}
}
comparar(a, b) 
//se números digitados foren diferentes aparecerá automaticamente "Não são iguais!"



/*Exercício 03
Crie uma função que:
● Recebe 2 números (chamaremos de num1 e num2)
● Compara esses números entre si:
○ Retorna mensagens dizendo se o primeiro número é
{maior/menor/igual} ao segundo número
Depois, chame a função com números que foram inseridos
pelo usuário através do prompt */


let a = Number(prompt("Digite um número:"))
let b = Number(prompt("Digite outro número:"))

function comparar(num1, num2) {
    if (num1 === num2) {
        console.log("São iguais!")
    } else if (num1 > num2) {
        console.log("Primeiro número maior que o segundo.")
    } else {
        console.log("Primeiro número menor que o segundo.")
}
}

comparar(a, b)



/* Exercício 04
Escreva um programa que receba
o Pokémon inicial escolhido pela
pessoa e imprima no console o seu
tipo:
● Bulbasauro (Planta e Veneno)
● Charmander (Fogo)
● Squirtle (Água) */


let pokemon = prompt("Escreva o nome de um pokemon:")
switch(pokemon){
    case "Bulbasauro":
        console.log("Planta e Veneno")
        break;
        
    case "Charmander":
        console.log("Fogo")
        break;

    case "Squirtle":
        console.log("Água")
        break;
    
    default:
        console.log("Pokemon não encontrado")
        break;
} 
//se o usuário não digitar exatamente igual ao escrito no programa (incluindo maiúsculas e minúsculas) será impresso "Pokemon não encontrado"



/* Exercício 05
Uma pessoa pode estudar em uma faculdade se:
● Tiver concluído o ensino médio
● Tiver 18 anos ou mais
● Não estiver cursando outra faculdade
Escreva uma função que receba estes parâmetros e devolva
se a pessoa pode ou não estudar nesta faculdade. Receba os
dados do usuário pelo prompt e execute a função */


let ensinoMedio = prompt("Você já concluiu o ensino médio?")
let idade = Number(prompt("Digite sua idade:"))
let faculdade = prompt("Você está cursando alguma faculdade no momento?")

if (idade >= 18 && ensinoMedio === "sim" && faculdade === "não"){
        console.log("Você pode estudar nesta faculdade :)") 
    } else {
        console.log("Você não pode estudar nesta faculdade :(")
    }



// Exercício de interpretação de código 01
/* a) Explique o que o código faz. Qual o teste que ele realiza? */
    // teste de divisão verificando o 'resto'

/* b) Para que tipos de números ele imprime no console "Passou no teste"? */
    // imprime esse mensagem para números pares

/* c) Para que tipos de números a mensagem é "Não passou no teste"? */
    // imprime essa mensagem para números ímpares


const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}



// Exercício de interpretação de código 02
/* a) Para que serve o código acima? */
    // o código serve para precificar a fruta escolhida

/* b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`? */
    // "O preço da fruta Maçã é R$ 2.25"

/* c) Considere que um usuário queira comprar uma `Pêra`, 
qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` 
(o `break` indicado pelo comentário "BREAK PARA O ITEM c.")? */
    // "O preço da fruta Pêra é R$ 5" 


let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)



// Exercício de interpretação de código 03
/* a) O que a primeira linha está fazendo? */
    // está pedindo para o usuário digitar um primeiro número

/* b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10? */
    // se o número usado for 10 aparecerá a mensagem "Esse número passou no teste"
    // se o número usado for -10 não aparecerá nenhuma mensagem

/* c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. */
    // sim, haverá um erro, pois apesar de estar declarada a mensagem não pode ser lida


const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)



// Exercício de escrita de código 01
/* Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."` */


let idade = Number(prompt("Digite sua idade"))

if(idade >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}


// Exercício de escrita de código 02
/* Agora faça um programa que verifica que turno do dia um aluno estuda. 
Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". 
Utilize o bloco if/else */


const turno = prompt("Em qual turno você estuda? Responda digitando 'M' (matutino) ou 'V' (Vespertino) ou 'N' (Noturno)")

if(turno === "M") {
    console.log("Bom dia!")
} else if (turno === "V") {
    console.log("Boa tarde!")
} else if (turno === "N") {
    console.log("Boa noite!")
} 



// Exercício de escrita de código 03
/* Repita o exercício anterior, mas utilizando a estrutura de switch case agora. */


const periodoEstudo = prompt("Em qual turno você estuda? Responda digitando 'M' (matutino) ou 'V' (Vespertino) ou 'N' (Noturno)")
let turno = periodoEstudo

switch (periodoEstudo){
    case "M":
        console.log("Bom dia!")
        break;
    case "V":
        console.log("Boa tarde!")
        break;
    case "N":
        console.log("Boa noite!")
        break;
    default:
        console.log("Turno inválido")
        break;
}


// Exercício de escrita de código 04
/* Considere a situação: você vai ao cinema com um amigo ou amiga, 
porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia 
e se o ingresso está abaixo de 15 reais. 
Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir 
e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga 
vai topar assistir o filme. Caso positivo, imprima no console a mensagem: 
"Bom filme!", caso contrário, imprima "Escolha outro filme :(" */


let generoFilme = prompt("Qual gênero de filme vocês irão assistir?")
let precoFilme = Number(prompt("Qual o preço máximo do ingresso?"))

if(generoFilme === "fantasia" && precoFilme < 15){
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}