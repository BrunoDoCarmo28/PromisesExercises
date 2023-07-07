let aceitar = false
console.log('pedir uber')

const promessa = new Promise((resolve, reject) => {
    if (aceitar) {
        return resolve('pedido aceito')
    }

    return reject('pedido negado')

})

console.log('Aguardando')

promessa.then(r => console.log(r)) // o uso do .then é: "quando essa promise for resolvida, então...."
    .catch(error => console.log(error)) //caso de algum erro, cai aqui
    .finally(() => console.log('Finalizado')) 