import {Center, Spinner, View} from 'native-base';
import React from 'react';
import DefaultContainer from '../../../components/DefaultContainer';
import CafeteriaDayInfoCard from '../../../components/MainScreen/CafeteriaDayInfoCard';
import useGetFoodInfo from '../../../querys/useGetFoodInfo';

const HomeCafeteriaScreen = () => {
  const {data, isLoading} = useGetFoodInfo();
  if (isLoading || !data) {
    return (
      <View flex={1} bgColor={'white'} justifyContent={'center'}>
        <Center>
          <Spinner />
        </Center>
      </View>
    );
  }
  return (
    <DefaultContainer>
      {data.map((food_info: FoodInfo) => (
        <CafeteriaDayInfoCard {...food_info} key={food_info.id} />
      ))}
    </DefaultContainer>
  );
};

export default HomeCafeteriaScreen;
