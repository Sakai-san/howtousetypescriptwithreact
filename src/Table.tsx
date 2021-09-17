export interface Column<R> {
    label: string;
    accessor: (row: R) => number | string
};

interface TableProps<R> {
    columns: Array<Column<R>>;
    rows: Array<R>;
};

function renderTableBody<R>(columns: Array<Column<R>>, rows: Array<R>){
    const rowsLength = rows.length;
    const colsLength = columns.length;

    const body = [];

    for (let i = 0; i < rowsLength; i++){
        const row = [];
        for (let j = 0; j < colsLength; j++){
            const key = columns[j].accessor;
            const value = key(rows[i]);
            row.push(<td key={`${i},${j}`}>{value}</td>);
        }
        body.push(<tr key={i}>{row}</tr>);
    }

    return body;
};

function Table<R>({
    columns,
    rows,
}: TableProps<R>) {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((column) => <th>{column.label}</th>)}
                </tr>
            </thead>
            <tbody>
                {renderTableBody<R>(columns, rows)}
            </tbody>            
        </table>
    );
};

export default Table;
