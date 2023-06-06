import React from 'react';
import { useRouter } from 'next/router';
import QrcodeIcon from '@heroicons/react/24/solid/QrcodeIcon';
import { Button, SvgIcon } from '@mui/material';

export const CreateQRcodeButton = () => {
  const router = useRouter();

  const openQRCodeWindow = () => {
    router.push('/addMap'); 
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
      Create Supply Maps
    </Button>
  );
};

export default CreateQRcodeButton;
