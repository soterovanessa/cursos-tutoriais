function bomDia(){
 console.log('Bom dia')   
}

const boaTarde =  function abc(){
    console.log('Boa Tarde')
}

// 1)Passar uma função como parametro para outra função
function executarQualquerCoisa(fn){
   if(typeof fn == 'function'){
       fn()
   }
  
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

//2) Retornar uma função a partir de uma outra função

function potencia(base, exp){
    return Math.pow(base, exp)
}

const bits8 = potencia(2, 8)
console.log(bits8)

 
function potencia(base){
    return function(exp){
        return Math.pow(base, exp)
    }
}
const potenciaDe2 = potencia (2)
console.log(potenciaDe2(8))

console.log(potencia(3)(4))