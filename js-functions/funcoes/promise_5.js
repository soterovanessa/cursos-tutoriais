function funcionarOuNão(valor, chanceErro){
    return new Promise((resolve, reject) =>{
        try{
        con.log('temp')
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro.')
        } else {
            resolve(valor)
        }

    } catch(e){
        reject(e)
    }

    })
}

funcionarOuNão('Testando', 0.5)
.then(v => console.log(`Valor: ${v}`))
.then(
    v => consol.log(v),
    err => console.log(`Erro esp.: ${err}`)
    )
.then(() => console.log('Quase Fim'))
.catch(err => console.log(`Erro: ${err}`))
.then(() => console.log('Fim!'))
