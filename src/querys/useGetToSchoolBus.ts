import {useQuery} from 'react-query';
import getToSchoolBus from '../apis/getToSchoolBus';

const useGetToSchoolBus = () => {
  return useQuery(['to_school_bus'], getToSchoolBus, {});
};

export default useGetToSchoolBus;
