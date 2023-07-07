import axios from "axios";
axios
    .get('https://api.github.com/users/maykbrito')
    .then(res => {
        console.log(res.data)
    })
    .catch(error => console.log(error))

  //res e error são parametros de funções que estão sendo passados
  //como argumentos para then e catch