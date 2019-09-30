/*

DESAFIO: Javascript é uma linguagem síncrona ou assíncrona?

R: javascript funciona de maneira assíncrona visto que uma funçao pode ser executada paralelamente a outra não dependendo que uma funçao acabe para dar inico a outra.
Porem naturalmente quando uma funçao depende do resultado de outra se aguarda a operação de uma para dar inico a outra isso ocorre em CallBack,
sendo ele um bloco de codigo que usualmente é uma funçao ou metodo informado ao comando que inicia a operação assíncrona.

Explique para que serve “promises”?

R:É fácil se perder em um mar imprevisível de retornos de chamadas à medida que uma base de código cresce e mais pessoas passam a contribuir e
aí que uma boa abordagem para lidar com código assíncrono entra as Promises, tal abordagem encapsulam esse problema fornecendo
formas para organizar callbacks (funções de retorno) que são fáceis de implementar e manter.

 Em javascript e como podemos resolver-las (informe pelo menos duas formas)? Bônus: Como podemos resolver um array de promises com javascript? Escreva um exemplo.
*/



//Usando o método estático Promise.resolveSeção
Promise.resolve("Success").then(function(value) {
  console.log(value); // "Success"
}, function(value) { });


//Resolvendo um arraySeção
var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});