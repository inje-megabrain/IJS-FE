import {useQuery} from 'react-query';
import getToUniversitySchedule from '../apis/getToUniversitySchedule';

const useGetUniversitySchedule = () => {
  return useQuery(['university_schedule'], getToUniversitySchedule);
};

export default useGetUniversitySchedule;
