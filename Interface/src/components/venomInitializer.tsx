import React from 'react';
import { VenomConnect } from 'venom-connect';
//import logo from './logo.svg';

type Props = {
  venomConnect: VenomConnect | undefined;
};

function Main({ venomConnect }: Props) {
  return React.createElement(
    'div',
    { className: 'App' },
    // JSX content goes here
  );
}

export default Main;
