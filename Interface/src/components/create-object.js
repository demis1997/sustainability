import React, { useState } from 'react';

function ObjectForm() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [certification, setCertification] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCertificationChange = (event) => {
    setCertification(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    const contractAddress = '0x12341';

    // prospathw na vrw pos na kamw connect sto aptos contract
    const contractInstance = connectToContract(contractAddress);
    contractInstance.addObject(name, location, description, certification)
      .then((result) => {
        console.log('Object data submitted:', result);
        setName('');
        setLocation('');
        setDescription('');
        setCertification('');
      })
      .catch((error) => {
        console.error('Error submitting object data:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Location:
        <input type="text" value={location} onChange={handleLocationChange} />
      </label>
      <br />
      <label>
        Description:
        <input type="text" value={description} onChange={handleDescriptionChange} />
      </label>
      <br />
      <label>
        Certification:
        <input type="text" value={certification} onChange={handleCertificationChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ObjectForm;

// pu ena vrw pos na kamw connect na to sirw dame, normally xrisimopiw web3.js but touche aptos doesnt support that 
function connectToContract(contractAddress) {

  return {
    addObject: (name, location, description, certification) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('Transaction successful');
        }, 2000);
      });
    },
  };
}
