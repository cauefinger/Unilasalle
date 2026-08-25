// a variável --- var --- ignora o bloco ({}) e pode ser acessada em qualquer parte do código
// a variável --- let --- é tornada como um "segredo" e só pode ser consultada dentro do bloco (as chaves).


let logado = true;

if (logado){
    let segredo = 'senha123456';
    var publico = 'pode acessar fora do bloco';
}

console.log(publico);
// console.log(segredo);    *** ERRO AQUI