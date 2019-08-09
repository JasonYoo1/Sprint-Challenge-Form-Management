import React, { useState } from 'react';
import './App.css';
import Form from './Form.js';

import UsersApp from './component/UsersComponent/UsersApp'

function App() {
  // const [users, setUsers] = useState([]);
  // const addUser = user => {
  //   setUsers([...users, user]);
  // };
  return (
    <div className="App">
      <Form />
      {/* {users.map(user => <div key={user.id}>{JSON.stringify(user)}</div>)} */}
      <UsersApp/>
    </div>
  );
}

export default App;