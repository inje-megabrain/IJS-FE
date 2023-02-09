import {useQuery} from 'react-query';
import getNotice from '../apis/getNotice';

const useGetNotice = () => {
  return useQuery(['notice'], getNotice, {});
};

export default useGetNotice;
