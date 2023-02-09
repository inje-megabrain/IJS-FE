import axios from 'axios';
import {API_SERVER} from '../../key';

const getDepartmentNotice = async () => {
  try {
    const url = `${API_SERVER}/api/notice/find/cs`;
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getDepartmentNotice;
