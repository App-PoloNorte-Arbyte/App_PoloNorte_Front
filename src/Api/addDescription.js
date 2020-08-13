import axios from 'axios'

export const addDescription = (token, equipment_id, description) => {
    return axios({
        method: 'post',
        url: 'https://polo-norte.herokuapp.com/maintenances',
        headers: { 'Authorization': `Bearer ${token}` },
        data: {
            "description": description,
            "equipment_id": equipment_id
        }
    })
        .then(resposta => {
            return resposta.data
        })
}

export default addDescription