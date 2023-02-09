import axios from 'axios';
import {API_SERVER} from '../../key';

const getToStationBus = async () => {
  try {
    const url = `${API_SERVER}/api/school/find/tostation`;
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getToStationBus;
