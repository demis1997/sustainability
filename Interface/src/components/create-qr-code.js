import React from 'react';
 //import { QRCodeSVG } from 'qrcode.react';
//import QrcodeIcon from '@heroicons/react/24/solid/QrcodeIcon';
import LinkIcon from '@heroicons/react/24/solid/LinkIcon';
import { useRouter } from 'next/router';
import QrcodeIcon from '@heroicons/react/24/solid/QrcodeIcon';
import { Button, SvgIcon } from '@mui/material';

//export const CreateQRcodeButton = () => {
//   const openQRCodeWindow = () => {
//     //const qrCodeUrl = 'https://reactjs.org/';
//     const text = 'Hello, world!';
//      // Calculate the center position of the screen
//      const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//      const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
//      const windowLeft = (screenWidth - 400) / 2;
//      const windowTop = (screenHeight - 400) / 2;
 
//      // Create a new document with the string content
//      const documentContent = `
//        <html>
//          <body>
//            <div style="display: flex; align-items: center; justify-content: center; height: 100%;">
//              <h1>${text}</h1>
//            </div>
//          </body>
//        </html>
//      `;
 
//      // Create a new window and write the document content
//      const windowObject = window.open('', '_blank', `top=${windowTop},left=${windowLeft},width=400,height=400,scrollbars=yes`);
//      windowObject.document.open();
//      windowObject.document.write(documentContent);
//      windowObject.document.close();
//    };
 
//    return (
//      <Button
//        startIcon={(
//          <SvgIcon fontSize="small">
//            <LinkIcon />
//          </SvgIcon>
//        )}
//        variant="contained"
//        onClick={openQRCodeWindow}
//      >
//        Create Supplier Link Code
//      </Button>
//    );
//  };
 
//  export default CreateQRcodeButton;

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
