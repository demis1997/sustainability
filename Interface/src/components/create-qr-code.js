import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

export const CreateQRcodeButton = () => {
  const openQRCodeWindow = () => {
    const qrCodeUrl = 'https://reactjs.org/'; // Replace with your desired URL
    const windowFeatures = 'width=400,height=400,scrollbars=yes';
    window.open(qrCodeUrl, '_blank', windowFeatures);
  };

  return (
    <button onClick={openQRCodeWindow}>Create QR Code</button>
  );
};

export default CreateQRcodeButton;
