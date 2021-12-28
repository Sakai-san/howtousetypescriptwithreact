import React from "react";
import Select from "./Select";
import logo from "./logo.svg";
import "./App.css";

interface Employee  {
  first: string,
  last: string,
  address: {
    city: string,
    street: string,
    number: number,
  }
};

const employees = [
  {
    first: 'Thomas',
    last: 'Rubattel',
    address: {
      city: 'Zurich',
      street: 'Bahnhofstrasse',
      number: 12,
    }
  },
  {
    first: 'Lisa',
    last: 'Merz',
    address: {
      city: 'Zurich',
      street: 'Badenstrasse',
      number: 75,
    }
  },
  {
    first: 'Grigor',
    last: 'Brogrov',
    address: {
      city: 'Zurich',
      street: 'Foerlibuckstrasse',
      number: 89,
    }
  }
];

function App() {
  return (
    <div className="App">
      <Select<Employee> rows={employees} makeRow={(row) => `${row.first}` } />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
