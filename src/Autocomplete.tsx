import React, { useState, ChangeEvent } from "react";

interface AutocompleteProps<Row> {
  rows: Array<Row>;
  renderRow: (r: Row) => string;
  placeholder?: string;
}

function renderOverlay<R>(props: AutocompleteProps<R>, input: string) {
  const matchedRows = props.rows.filter((row) =>
    props.renderRow(row).includes(input)
  );

  return matchedRows.map((row, index) => (
    <div key={index}>{props.renderRow(row)}</div>
  ));
}

function Autocomplete<R>(props: AutocompleteProps<R>): React.ReactElement<R> {
  const [input, setInput] = useState<string | undefined>(undefined);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  return (
    <div>
      <input
        value={input}
        onChange={changeHandler}
        placeholder={props.placeholder}
      />
      <div>{input && renderOverlay<R>(props, input)}</div>
    </div>
  );
}

export default Autocomplete;
