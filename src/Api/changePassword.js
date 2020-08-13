import axios from 'axios'

export const changePassword = (token, id, password, newPassword) => {
    return axios({
        method: 'patch',
        url: `https://polo-norte.herokuapp.com/change-password/${id}`,
        headers: { 'Authorization': `Bearer ${token}` },
        data: {
            "password": password,
            "newPassword": newPassword
        }
    })
        .then(resposta => {
            return resposta.data
        })
}

export default changePassword