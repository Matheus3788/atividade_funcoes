//npm install readline-sync

const readlineSync = require('readline-sync'); // Testar no console

function menor_valor() {
    var numeros = [];

    for(i = 0; i < 5; i++){
        var entrada = parseFloat(readlineSync.question(`Digite o ${i+1}o numero da lista: `));
        numeros.push(entrada);
    }

    var menor_valor = Math.min(...numeros);

    console.log(`O menor valor entre os números que você digitou é : ${menor_valor}`);
}

menor_valor();