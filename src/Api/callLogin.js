import axios from 'axios';
const callLogin = (cpf, password) => {
  return axios.post('https://polo-norte.herokuapp.com/users/login', {
    "cpf": cpf,
    "password": password
  })
};

export default callLogin;