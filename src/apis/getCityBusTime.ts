import axios from 'axios';
import {API_SERVER} from '../../key';

const getCityBusTime = async (node_id: string) => {
  try {
    const url = `${API_SERVER}/api/busstop/find/details?node_id=${node_id}`;
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getCityBusTime;
