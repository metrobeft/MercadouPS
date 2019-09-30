//Eu quero retornar “hey amy” mas o código abaixo está retornando “hey
//arnold”, por que?

//visto que o codigo apresenta erro em sua sintaxe em sua construçao
function greet (person) { //Inicialmente é cria uma funçao na qual é nescessaria uma variavel person para ser iniciada
 if (person == { name: 'amy' }) { //Aqui temos o problema de sintaxe que neste caso esta fazendo uma comparaçao erronea e está retornando um valor false quando deveria retornar um valor true isso se deve que em JavaScript o objeto { name: 'amy' } tem valores diverentes em sua memoria ocasionando 2 objetos diferentes apesar de ter mesma propriedade e valor
 return 'hey amy' //caso para condição se for verdadeira
 } else {
 return 'hey arnold'//caso para condição se for verdadeira
 }
}
greet({ name: 'amy' }) //resposta do console "hey arnold"

//Bônus: reescreva a função de forma que ela retorno “hey amy”.


function greet (person) {
    if (person.name === 'amy') { //Desta forma alinhamos que ambos os objetos sejam comparados corretamente na memoria
      return 'hey amy'
    }
    return 'hey arnold'
  }
  greet({ name: 'amy' }) //resposta do console "hey amy"