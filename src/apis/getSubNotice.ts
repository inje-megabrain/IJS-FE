import axios from 'axios';
import {API_SERVER} from '../../key';

const getSubNotice = async () => {
  try {
    const url = `${API_SERVER}/api/subject/find`;
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getSubNotice;
