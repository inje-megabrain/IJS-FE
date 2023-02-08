import {Box, Button, HStack, Text, VStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import React from 'react';
import {Linking} from 'react-native';

type Props = {
  main_title: string;
  data: any;
};

const NoticeCard = ({main_title, data}: Props) => {
  const handleClick = (link: string) => {
    Linking.canOpenURL(link).then(() => {
      return Linking.openURL(link);
    });
  };
  return (
    <VStack
      px={4}
      borderRadius={16}
      borderWidth={0.5}
      mt={2}
      py={4}
      space={2}
      mb={4}>
      <Box>
        <HStack>
          <Text fontSize={'lg'} fontWeight={700}>
            <Ionicons name="checkmark" size={18} color={'green'} /> {main_title}
          </Text>
          <Button size={'sm'} variant={'link'} right={0} position={'absolute'}>
            {'자세히 보기 >'}
          </Button>
        </HStack>
      </Box>
      {data.map(({id, title, contentsUrl, _author, _writeDate}: any) => (
        <Box key={id}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            onPress={() => handleClick(contentsUrl)}>
            {title}
          </Text>
        </Box>
      ))}
    </VStack>
  );
};

export default NoticeCard;
