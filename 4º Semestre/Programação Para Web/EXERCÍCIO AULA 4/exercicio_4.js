// SISTEMA QUE VERIFICA SE UM CLIENTE TEM DIREITO À PROMOÇÕES NO CINEMA

const prompt = require('readline-sync');

// Força o terminal a ler acentos corretamente
prompt.setDefaultOptions({ encoding: 'utf8' });

const nome = prompt.question("Digite seu nome: ");

console.log(typeof nome);

let idade = Number(prompt.question(`Olá, ${nome}! Bem vindo ao sistema de cadastro do cinema. Por favor, insira sua idade para ver se tem direito às promoções: `));

console.log(typeof idade);

// Calcula quantos anos faltam para completar 60
let melhor_idade = 60 - idade;

if (idade < 26) {

    console.log(`Parabéns, ${nome}! Você tem ${idade} anos e tem direito à promoção de estudante de meia entrada.`);

} else if (idade > 60) {

    console.log(`Parabéns, ${nome}! Você tem ${idade} anos e tem direito à promoção de idoso de meia entrada.`);

} else {

    console.log(`Você tem ${idade} anos e está na faixa normal de entrada.`);

}

// Exibe para todos
console.log(`Faltam ${melhor_idade} anos para você ter direito à nossa promoção de meia entrada para idosos.`);