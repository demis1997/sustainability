import React, { useState } from 'react';

const ObjectCreationForm = ({ suppliers, onSave }) => {
  const [name, setName] = useState('');
  const [selectedSupplier, setSelectedSupplier] = useState('');


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSupplierChange = (event) => {
    setSelectedSupplier(event.target.value);
  };

  const handleSave = () => {

    const newObject = {
      name: name,
      supplier: selectedSupplier,
 
    };
    onSave(newObject);
    setName('');
    setSelectedSupplier('');

  };

  return (
    <div>
      <h2>Create Object</h2>
      <input
        type="text"
        placeholder="Object Name"
        value={name}
        onChange={handleNameChange}
      />
      <select value={selectedSupplier} onChange={handleSupplierChange}>
        <option value="">Select a Supplier</option>
        {suppliers.map((supplier, index) => (
          <option key={index} value={supplier.name}>
            {supplier.name}
          </option>
        ))}
      </select>

      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ObjectCreationForm;
