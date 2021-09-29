import React from "react";
import Table, { Column } from "./Table";
import Autocomplete from "./Autocomplete";
import logo from "./logo.svg";
import "./App.css";

type Row = {
  first: string;
  last: string;
  address: {
    street: string;
    place: {
      city: string;
      zip: string;
    };
  };
};

const rows: Array<Row> = [
  {
    first: "Thomas",
    last: "Nakayama",
    address: {
      street: "Grubenstrasse 4",
      place: {
        city: "Zurich",
        zip: "8049",
      },
    },
  },
  {
    first: "Marc",
    last: "Werder",
    address: {
      street: "Dufourstrasse 138",
      place: {
        city: "Zurich",
        zip: "8008",
      },
    },
  },
  {
    first: "Sebastian",
    last: "Bohl",
    address: {
      street: "Sihlfeldstrasse 118",
      place: {
        city: "Zurich",
        zip: "8004",
      },
    },
  },
];

const columns: Array<Column<Row>> = [
  {
    label: "First name",
    accessor: (r: Row) => r.first,
  },
  {
    label: "Last name",
    accessor: (r: Row) => r.last,
  },
  {
    label: "Address street",
    accessor: (r: Row) => r.address.street,
  },
  {
    label: "Address city",
    accessor: (r: Row) => `${r.address.place.zip}, ${r.address.place.city}`,
  },
];

function App() {
  return (
    <div className="App">
      {/*      <Table<Row> columns={columns} rows={rows} /> */}
      <Autocomplete<Row>
        placeholder="look for a student"
        rows={rows}
        renderRow={(r) => `${r.last}, ${r.first}, ${r.address.place.city}`}
      />
    </div>
  );
}

export default App;
