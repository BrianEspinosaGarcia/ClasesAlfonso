// Exportar como un modulo una funcion
var suma1 = function (valor1, valor2){
    return valor1 + valor2;
};

module.exports = suma1;

//Importar una funcion:

var suma1 = require('./modules/module1.js');
console.log('La suma 1 da: ' + suma1(2,2));
console.log('La suma 1 da: ' + require('./modules/module1.js')(3,3));
