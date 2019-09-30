//Eu quero chamar a função bark() de Dog, porém eu recebo um erro. Por que?


function Dog ( name ) {
this . name = name
}
Dog . bark = function () {
console . log ( this . name + ' says woof' )
}
let fido = new Dog ( 'fido' )
fido . bark ()

// Neste codigo acabamos por receber um erro porque fido.bark não é uma função, isso se deve ao fato que definimos a função bark em outra função Dog(), que também é um Object Constructor isso é somente possivel porque, em JavaScript, funções são objetos.

//Bônus: Qual outras forma eu posso escrever Dog além de função, de forma que eu ainda consiga chamar fido.bark()

class Dog {
    constructor (name) {
      this.name = name
    }
  
    bark () {
      console.log(this.name + ' says woof')
    }
  }
  
  let fido = new Dog('fido')
  fido.bark() // resposta do console "fido says woof"