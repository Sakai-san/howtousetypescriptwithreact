import React, { useState, ChangeEvent } from 'react';

interface SelectProps<R> {
    rows: Array<R>;
    makeRow: (row: R) => string;
}

const Select = <R extends {}>({rows, makeRow}: SelectProps<R>): React.ReactElement<R> => {
    const [selection, setSelection] = useState<R | undefined>(undefined);

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectIndex: string = e.target.value;
        setSelection(rows[parseInt(selectIndex, 10)]);
    };

    const options = rows.map( (row, index) =><option key={JSON.stringify(row)} value={index}>{makeRow(row)}</option> );

    return (
        <select value={selection?.toString?.()} onChange={onChange}>
            {options}
        </select>
    );
};

export default Select;
