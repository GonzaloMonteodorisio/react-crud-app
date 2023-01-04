import React from 'react';
import DataTableRow from '../DataTableRow';

const DataTable = ({data}) => {
  return (
    <div>
      <h2>Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>Shirt number</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data.length === 0 
              ? (
              <tr>
                <td colSpan='5'>
                  No Data
                </td>
              </tr>) 
              : (
                data.map(player => <DataTableRow player={player} key={player.id} />)
              )
          }
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;