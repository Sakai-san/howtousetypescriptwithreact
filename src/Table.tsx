export interface Column<R> {
    label: string;
    accessor: keyof R | ((row: R) => number | string)
};

interface TableProps<R> {
    columns: Array<Column<R>>;
    rows: Array<R>;
};

const renderBody = <R extends {}>(columns: Array<Column<R>>, rows: Array<R>) => {
    const rowsLength = rows.length;
    const colsLength = columns.length;

    const body = [];

    for (let i = 0; i < rowsLength; i++){
        const row = [];
        for (let j = 0; j < colsLength; j++){
            const key = columns[j].accessor;
            const value = typeof key === 'function' ? key(rows[i]) : rows[i][key];
            row.push(<td key={`${i},${j}`}>{value}</td>);
        }
        body.push(<tr key={i}>{row}</tr>);
    }

    return body;
};

const Table = <R extends {}>({
    columns,
    rows,
}: TableProps<R>) => {
    const body = renderBody<R>(columns, rows);
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((column) => <th>{column.label}</th>)}
                </tr>
            </thead>
            <tbody>
                {body}
            </tbody>            
        </table>
    );
};

export default Table;
