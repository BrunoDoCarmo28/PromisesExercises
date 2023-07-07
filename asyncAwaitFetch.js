async function start() {

    const response = await fetch('https://api.github.com/users/maykbrito')
    const user = await response.json() //esperando resposta virar um json
    const resposResponse = await fetch(user.repos_url) //pegando os dados de repos dentro do que foi recebido pela variavel user
    const repos = await resposResponse.json() //transformando em json
    console.log(repos) //jogando os dados de repos na tela do console


}
start().catch(e => console.log(e))
