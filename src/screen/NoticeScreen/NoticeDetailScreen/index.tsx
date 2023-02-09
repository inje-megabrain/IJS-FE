import {useRoute} from '@react-navigation/native';
import {FlatList, View} from 'native-base';
import React from 'react';
import NoticeList from '../../../components/NoticeScreen/NoticeList';
import useGetDepartmentNotice from '../../../querys/useGetDepartmentNotice';
import useGetNotice from '../../../querys/useGetNotice';
import useGetSubNotice from '../../../querys/useGetSubNotice';

const funcArr = [useGetSubNotice, useGetDepartmentNotice, useGetNotice];
const NoticeDetailScreen = () => {
  const route = useRoute();
  let flag = 0;
  //@ts-ignore
  if (route.params.title === 'IU-나비 비교과 활동') {
    flag = 0;
    //@ts-ignore
  } else if (route.params.title === '컴퓨터공학과') {
    flag = 1;
    //@ts-ignore
  } else if (route.params.title === '인제 소식') {
    flag = 2;
  }
  const {data} = funcArr[flag]();
  return (
    <View bgColor={'white'} flex={1}>
      <FlatList
        data={data}
        renderItem={NoticeList}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
};

export default NoticeDetailScreen;
