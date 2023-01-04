import React from 'react';

const DataTableRow = ({player}) => {
  return (
    <tr key={player.id}>
      <td>{player.shirtNumber}</td>
      <td>{player.firstName}</td>
      <td>{player.lastName}</td>
      <td>{player.age}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
}

export default DataTableRow;