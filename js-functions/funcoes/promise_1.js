function primeiroElemento(array){
    return array [0]
}

function primeiraLetra(string){
    return string [0]
}

const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve){
    resolve (['Vanessa', 'Vagner', 'Rocky'])

})

.then(primeiroElemento)
.then(primeiraLetra)
.then(letraMinuscula)
.then(console.log)