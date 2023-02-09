import {useQuery} from 'react-query';
import getCityBusTime from '../apis/getCityBusTime';

const useGetCityBusTime = (node_id: string) => {
  return useQuery(
    ['cityBus', node_id],
    ({queryKey}) => getCityBusTime(queryKey[1]),
    {staleTime: 1000},
  );
};

export default useGetCityBusTime;
