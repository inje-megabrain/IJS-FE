import {Box, Divider, Text, VStack} from 'native-base';
import React from 'react';
import {Linking} from 'react-native';

type Props = {
  item: {
    id: number;
    title: string;
    contentUrl: string;
    author: string;
    endAt: string;
  };
};

const NoticeList = ({item}: Props) => {
  const handleClick = () => {
    Linking.canOpenURL(item.contentUrl).then(() => {
      return Linking.openURL(item.contentUrl);
    });
  };
  const date = new Date(item.endAt);
  return (
    <Box>
      <VStack py={2} px={4}>
        <Text
          fontSize={'lg'}
          fontWeight={'bold'}
          numberOfLines={2}
          onPress={() => {
            handleClick();
          }}>
          {item.title}
        </Text>
        <Text>
          {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일
        </Text>
      </VStack>
      <Divider />
    </Box>
  );
};

export default NoticeList;
