import React, { useState, useEffect } from 'react';
import GoogleMapComponent from 'src/components/GoogleMapComponent';

const URLPage = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    handleLoadUrl();
  }, []);

  const handleLoadUrl = () => {
    
    // Get the URL
    const currentUrl = window.location.href;
    
    // Perform any additional logic based on the URL
    console.log('Loaded URL:', currentUrl);

    // Update the state if needed
    // setUrl(currentUrl);
  };

  return (
    <div>
      <p>URL: {url}</p>
    </div>
  );
};

export default URLPage;
