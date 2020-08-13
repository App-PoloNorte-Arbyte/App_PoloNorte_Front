import axios from 'axios';
const getEquipment = (id, token) => {
  return axios.get(`https://polo-norte.herokuapp.com/equipments/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
};

export default getEquipment;