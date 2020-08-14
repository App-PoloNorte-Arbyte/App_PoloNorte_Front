import axios from 'axios'

export const changePassword = (token, cpf, password, newPassword) => {
    return axios({
        method: 'patch',
        url: 'https://polo-norte.herokuapp.com/users/change-password',
        headers: { 'Authorization': `Bearer ${token}` },
        data: {
            "cpf": cpf,
            "password": password,
            "newPassword": newPassword
        }
    })
        .then(resposta => {
            return resposta.data
        })
}

export default changePassword