const promessa = new Promise(function (resolve, reject) {

    return resolve('ok')

})

async function start() { //start é só o nome escolhido, pode ser qualquer um
    try {
        const result = await promessa //pegando resultado pela espera da promessa
        console.log(result)
    }
    catch (error) {
        console.log(error)
    }
    finally {
        console.log('Rodar Sempre')
    }
}
start()


    // O lance aqui é não precisar daquele monte de .then e simplesmente esperar pela resposta e apresentá-la.