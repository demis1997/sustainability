import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import QrcodeIcon from '@heroicons/react/24/solid/QrcodeIcon';
import { Button, SvgIcon } from '@mui/material';

export const CreateQRcodeButton = () => {
  const openQRCodeWindow = () => {
    const qrCodeUrl = 'https://reactjs.org/'; // Replace with your desired URL
    const windowFeatures = 'width=400,height=400,scrollbars=yes';
    window.open(qrCodeUrl, '_blank', windowFeatures);
  };

  return (
    <Button
    startIcon={(
      <SvgIcon fontSize="small">
        <QrcodeIcon />
      </SvgIcon>
    )}
    variant="contained"
      onClick={openQRCodeWindow}
    >
      Create QR Code
    </Button>
  );
};

export default CreateQRcodeButton;
