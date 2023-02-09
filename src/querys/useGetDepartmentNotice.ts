import {useQuery} from 'react-query';
import getDepartmentNotice from '../apis/getDepartmentNotice';

const useGetDepartmentNotice = () => {
  return useQuery(['department_notice'], getDepartmentNotice, {});
};

export default useGetDepartmentNotice;
