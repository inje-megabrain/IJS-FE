import {Box, Divider, Text, View} from 'native-base';
import React from 'react';
import {EventCardDateParser} from '../../../utils/EventCardDateParser';

type Props = {
  _id: number;
  startingdate: string;
  endingdate: string;
  title: string;
};

const EventCard = ({_id, startingdate, endingdate, title}: Props) => {
  return (
    <View>
      <Box px={4} py={0.5}>
        <Text fontSize={'md'} fontWeight={300}>
          {EventCardDateParser(startingdate, endingdate)}
        </Text>
      </Box>
      <Box px={4}>
        <Text fontSize={'lg'} fontWeight={600}>
          {title}
        </Text>
      </Box>
      <Divider />
    </View>
  );
};

export default EventCard;
