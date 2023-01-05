import React, { useState } from 'react';
import DataTable from '../DataTable';
import Form from '../Form';

import { initialPlayers } from '../../data/initialPlayers';

const CrudApp = () => {

  const [players, setPlayers] = useState(initialPlayers);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = data => {
    data.id = Date.now();
    console.info('data: ', data);
    setPlayers([...players, data]);
  }

  const updateData = data => {
    let newData = players.map(player => player.id === data.id ? data : player);
    setPlayers(newData);
  }

  const deleteData = data => {

  }

  return (
    <>
      <Form 
        createData={createData} 
        updateData={updateData} 
        dataToEdit={dataToEdit} 
        setDataToEdit={setDataToEdit} 
      />
      <DataTable 
        data={players} 
        deleteData={deleteData}
        setDataToEdit={setDataToEdit} 
      />
    </>
  );
}

export default CrudApp;