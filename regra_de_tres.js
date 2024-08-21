//npm install readline-sync

const readlineSync = require('readline-sync'); // Testar no console


function regra_de_tres(){
    var resultado = 0.0
    var perg_inicial = readlineSync.question(`A relacao entre as variaveis e diretamente ou inversamente proporcional? (Digite 'd' ou 'i'): `);
    if(perg_inicial !== 'd' && perg_inicial != 'i'){
        console.log('Opção Inválida!')
        return;
    }
    var num_1 = parseInt(readlineSync.question(`Digite o primeiro numero da primeira coluna: `));
    var num_2 = parseInt(readlineSync.question(`Digite o segundo numero da primeira coluna: `));
    var num_3 = parseInt(readlineSync.question(`Digite o primeiro numero da segunda coluna: `));

    if(perg_inicial === 'd'){
        resultado = (num_2*num_3)/num_1;
        console.log(`O valor da variável é: ${resultado}`);

    } else if (perg_inicial === 'i'){
        resultado = (num_1*num_3)/num_2;
        console.log(`O valor da variável é: ${resultado}`);

    }

}

regra_de_tres();