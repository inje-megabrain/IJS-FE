import {useQuery} from 'react-query';
import getSubNotice from '../apis/getSubNotice';

const useGetSubNotice = () => {
  return useQuery(['subNotice'], getSubNotice, {});
};

export default useGetSubNotice;
