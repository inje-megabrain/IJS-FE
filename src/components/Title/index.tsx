import {Text} from 'native-base';
import React from 'react';

type Props = {
  title: string;
};

const Title = ({title}: Props) => {
  return (
    <Text fontSize="lg" fontWeight={600}>
      {title}
    </Text>
  );
};

export default Title;
