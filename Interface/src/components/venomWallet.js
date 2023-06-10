import React from 'react';
import { VenomConnect } from '..venom-connect';

function ConnectWallet({ venomConnect }) {
  const login = async () => {
    if (!venomConnect) return;
    await venomConnect.connect();
  };
  return React.createElement(
    'div',
    null,
    React.createElement(
      React.Fragment,
      null,
      React.createElement('h1', null, 'My Venom Crowdsale'),
      React.createElement('p', null, 'Connect Wallet to continue'),
      React.createElement(
        'a',
        { className: 'btn', onClick: login },
        'Connect wallet'
      )
    )
  );
}
  
export default ConnectWallet;
