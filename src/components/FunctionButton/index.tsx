import React from 'react';
import {Box, IconButton, Text} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Linking} from 'react-native';

type Props = {
  title: string;
  link: string;
  iconname: string;
};

const FunctionButton = ({title, link, iconname}: Props) => {
  const handleClick = () => {
    Linking.canOpenURL(link).then(() => {
      return Linking.openURL(link);
    });
  };
  return (
    <Box pr={2}>
      <IconButton
        variant="outline"
        name={title}
        onPress={handleClick}
        size="md"
        _icon={{
          as: Ionicons,
          name: iconname,
          size: '3xl',
        }}
      />
      <Text fontSize={10} textAlign={'center'}>{`${title}`}</Text>
    </Box>
  );
};

export default FunctionButton;
