import React, { useState } from 'react';
import './App.css';


import Form from './Form.js';
import UsersApp from './component/UsersComponent/UsersApp'

function App() {

  return (
    <div className="App">
      <Form />
      <UsersApp/>
    </div>
  );
}

export default App;