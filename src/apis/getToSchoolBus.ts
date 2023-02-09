import axios from 'axios';
import {API_SERVER} from '../../key';

const getToSchoolBus = async () => {
  try {
    const url = `${API_SERVER}/api/school/find/toschool`;
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getToSchoolBus;
