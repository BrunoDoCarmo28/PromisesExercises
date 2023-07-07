fetch('https://api.github.com/users/maykbrito') // ta buscando a API do mayk
    .then(response => console.log(response)) // depois que buscar tudo da API, então(then) a função anonima vai recer o coloe log dela mesma com a API



fetch('https://api.github.com/users/maykbrito')
    .then(response => {

        response.json() //nova promise pendente

            .then(data => console.log(data))

    }) // no final, pegou os dados da api e transformou em um JSON


fetch('https://api.github.com/users/maykbrito')
    .then(response => {

        response.json() //nova promise pendente

            .then(data => {

                fetch(data.repos_url) //promise dentro de promise
                    .then(res => res.json().then(d => console.log(d))) // precisa transformar a nova resposta em um json, alem de jogar os dados na tela do console usando o d

            })

    })
