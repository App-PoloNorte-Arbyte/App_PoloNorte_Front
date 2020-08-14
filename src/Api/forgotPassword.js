import axios from 'axios'

export const forgotPassword = (cpf) => {
  return axios({
    method: 'patch',
    url: 'https://polo-norte.herokuapp.com/users/forgot-password',
    data: {
      "cpf": cpf,
    }
  })
    .then(resposta => {
      return resposta.data
    })
}

export default forgotPassword