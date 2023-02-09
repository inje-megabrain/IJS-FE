import {useQuery} from 'react-query';
import getToStationBus from '../apis/getToStationBus';

const useGetToStationBus = () => {
  return useQuery(['to_station_bus'], getToStationBus, {});
};

export default useGetToStationBus;
