// a variável --- var --- ignora o bloco ({}) e pode ser acessada em qualquer parte do código
// a variável --- let --- é tornada como um "segredo" e só pode ser consultada dentro do bloco (as chaves).


let logado = true;

if (logado){
    let segredo = 'não posde acessar fora do bloco';
    var publico = 'pode acessar fora do bloco';
}   const nao_mexer = 'variável que não pode ser alterada';

console.log(publico);
// console.log(segredo);    *** ERRO AQUI
console.log(nao_mexer);