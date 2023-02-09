import React from 'react';
import DefaultContainer from '../../../components/DefaultContainer';
import DaewooBusInfoCard from '../../../components/MainScreen/DaewooBusInfoCard';
import InjeBusInfoCard from '../../../components/MainScreen/InjeBusInfoCard';
import ParkBusInfoCard from '../../../components/MainScreen/ParkBusInfoCard';

const HomeBusInfoScreen = () => {
  return (
    <DefaultContainer>
      <InjeBusInfoCard />
      <ParkBusInfoCard />
      <DaewooBusInfoCard />
    </DefaultContainer>
  );
};

export default HomeBusInfoScreen;
