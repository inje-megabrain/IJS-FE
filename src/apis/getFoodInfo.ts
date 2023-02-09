import axios from 'axios';
import {API_SERVER} from '../../key';

const getFoodInfo = async () => {
  try {
    const url = `${API_SERVER}/api/dishs/today`;
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getFoodInfo;
