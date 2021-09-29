export interface Column<R> {
    label: string;
    accessor: (row: R) => number | string
};

interface TableProps<R> {
    columns: Array<Column<R>>;
    rows: Array<R>;
};

function renderTableBody<R>(columns: Array<Column<R>>, rows: Array<R>){
    return (
        <tbody>
            {rows.map ( (row, i) =>
                <tr key={i}>
                    {
                        columns.map((col, j) =>
                            <td key={`${i},${j}`}> {col.accessor(row)} </td>
                        )
                    }
                </tr>
            )}
        </tbody>
    );
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

            {renderTableBody<R>(columns, rows)}

        </table>
    );
};

export default Table;
