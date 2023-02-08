import {Box, VStack} from 'native-base';
import DefaultContainer from '../../../components/DefaultContainer';
import BusInfoCard from '../../../components/MainScreen/BusInfoCard';
import CafeteriaInfoCard from '../../../components/MainScreen/CafeteriaInfoCard';
import SchoolFunctions from '../../../components/MainScreen/SchoolFunctions';
import SchoolYearClockCard from '../../../components/MainScreen/SchoolYearClockCard';
import Title from '../../../components/Title';
import React from 'react';

const HomeMainScreen = () => {
  return (
    <DefaultContainer>
      <VStack space={6}>
        <Box px={4}>
          <SchoolYearClockCard />
        </Box>
        <Box pl={4}>
          <Title title="학교 기능" />
          <SchoolFunctions />
        </Box>
        <Box px={4}>
          <Title title="학식 정보" />
          <CafeteriaInfoCard />
        </Box>
        <Box px={4}>
          <Title title="버스 정보" />
          <BusInfoCard />
        </Box>
      </VStack>
    </DefaultContainer>
  );
};

export default HomeMainScreen;
