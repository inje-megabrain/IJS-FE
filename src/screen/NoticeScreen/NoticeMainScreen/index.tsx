import {Box, Center, Spinner, View} from 'native-base';
import React from 'react';
import DefaultContainer from '../../../components/DefaultContainer';
import NoticeCard from '../../../components/NoticeScreen/NoticeCard';
import Title from '../../../components/Title';
import useGetDepartmentNotice from '../../../querys/useGetDepartmentNotice';
import useGetNotice from '../../../querys/useGetNotice';
import useGetSubNotice from '../../../querys/useGetSubNotice';

const NoticeMainScreen = () => {
  const {
    data: subNoticeData,
    isLoading: isSubNoticeLoading,
    isFetchedAfterMount: isSubNoticeFetched,
  } = useGetSubNotice();

  const {
    data: noticeData,
    isLoading: isNoticeLoading,
    isFetchedAfterMount: isNoticeFetched,
  } = useGetNotice();

  const {
    data: departmentNoticeData,
    isLoading: isDepartmentNoticeLoading,
    isFetchedAfterMount: isDepartmentNoticeFetched,
  } = useGetDepartmentNotice();

  if (
    isSubNoticeLoading ||
    !isSubNoticeFetched ||
    isNoticeLoading ||
    !isNoticeFetched ||
    isDepartmentNoticeLoading ||
    !isDepartmentNoticeFetched
  ) {
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
      <Box pt={2} px={4}>
        <Title title="학교 공지" />
        <NoticeCard main_title="인제 소식" data={noticeData} />
      </Box>
      <Box pt={2} px={4}>
        <Title title="학과 공지" />
        <NoticeCard main_title="컴퓨터공학과" data={departmentNoticeData} />
      </Box>
      <Box pt={2} px={4}>
        <Title title="비교과" />
        <NoticeCard main_title="IU-나비 비교과 활동" data={subNoticeData} />
      </Box>
    </DefaultContainer>
  );
};

export default NoticeMainScreen;
