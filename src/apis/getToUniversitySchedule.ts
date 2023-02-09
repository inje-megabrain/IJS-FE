import axios from 'axios';
import {API_SERVER} from '../../key';

const getToUniversitySchedule = async () => {
  try {
    const url = `${API_SERVER}/api/university/schedule`;
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getToUniversitySchedule;
