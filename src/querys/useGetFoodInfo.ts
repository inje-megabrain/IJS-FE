import {useQuery} from 'react-query';
import getFoodInfo from '../apis/getFoodInfo';

const useGetFoodInfo = () => {
  return useQuery(['subNotice'], getFoodInfo, {});
};

export default useGetFoodInfo;
