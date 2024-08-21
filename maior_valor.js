//npm install readline-sync

const readlineSync = require('readline-sync'); // Testar no console

function maior_valor() {
    var numeros = [];

    for(i = 0; i < 5; i++){
        var entrada = parseFloat(readlineSync.question(`Digite o ${i+1}o numero da lista: `));
        numeros.push(entrada);
    }

    var maior_valor = Math.max(...numeros);

    console.log(`O maior valor entre os números que você digitou é : ${maior_valor}`);
}

maior_valor();