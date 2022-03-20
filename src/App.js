import React from 'react';
import './App.css';
import { Know } from './js/Know';

function App() {
  const [name, setName] = React.useState("리액트");
  return (
    <div className="App flex-column">
        <Know name={name}/>
    </div>
  );
}

export default App;