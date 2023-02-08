import {WhiteContainer} from './DefaultContainer.styles';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const DefaultContainer = ({children}: Props) => {
  return <WhiteContainer>{children}</WhiteContainer>;
};

export default DefaultContainer;
