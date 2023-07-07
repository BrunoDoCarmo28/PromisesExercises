import axios from "axios";
Promise.all([
    axios.get('https://api.github.com/users/maykbrito'), //não esquecer a virgula quando for fazer
    axios.get('https://api.github.com/users/maykbrito/repos')
])
    .then(res => {
        console.log(res[0].data.login)
        console.log(res[1].data.length)
    })
    .catch(error => console.log(error.message))

//Não esquecer que axios é só uma biblioteca de exemplo.
