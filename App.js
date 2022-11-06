import React from 'react'; 
import './App.css';

import React, { useEffect, useState } from "react";
function Fetch() {
  const [data, setData] = useState(null);
  useEffect(()=> {
    fetch('https://api.github.com/users/kunmi-a')
    .then((resp) => resp.json())
    .then((apiData)) => {
      setData(apiData.message);
    });
  }, []);
  return (
    <div>
      <img width={500} src={data} />
    </div>
  );
} 

export default Fetch;
useEffect(()=> {
fetch('https://api.github.com/users/kunmi-a')
.then(res =>{
  return res.json();
})
.then(data) => {
console.log(data);
}
}, []);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
