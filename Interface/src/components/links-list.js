import React from 'react';

const ObjectList = ({ objects }) => {
  return (
    <div>
      <h2>Object List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Supplier</th>
          </tr>
        </thead>
        <tbody>
          {objects.map((object, index) => (
            <tr key={index}>
              <td>{object.name}</td>
              <td>{object.supplier}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ObjectList;
