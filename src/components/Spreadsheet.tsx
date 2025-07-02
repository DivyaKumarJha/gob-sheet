import React from 'react';
import { useTable, Column } from 'react-table';

type Row = {
  request: string;
  submitted: string;
  status: string;
  submitter: string;
  url: string;
  assigned: string;
  priority: string;
  dueDate: string;
  estValue: string;
};

const data: Row[] = [
  {
    request: 'Design Banner',
    submitted: '2025-06-25',
    status: 'In Review',
    submitter: 'Alice',
    url: 'https://...',
    assigned: 'Bob',
    priority: 'High',
    dueDate: '2025-07-05',
    estValue: '$1,200',
  },
  // Add 4–5 more rows...
];

const columns: Column<Row>[] = [
  { Header: 'Job Request', accessor: 'request' },
  { Header: 'Submitted', accessor: 'submitted' },
  {
    Header: 'Status',
    accessor: 'status',
    Cell: ({ value }) => (
      <span className="px-2 py-0.5 bg-yellow-200 rounded">{value}</span>
    ),
  },
  { Header: 'Submitter', accessor: 'submitter' },
  {
    Header: 'URL',
    accessor: 'url',
    Cell: ({ value }) => (
      <a href={value} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
        Link
      </a>
    ),
  },
  { Header: 'Assigned', accessor: 'assigned' },
  { Header: 'Priority', accessor: 'priority' },
  { Header: 'Due Date', accessor: 'dueDate' },
  { Header: 'Est. Value', accessor: 'estValue' },
];

export default function Spreadsheet() {
  const table = useTable({ columns, data });

  return (
    <div className="overflow-auto border border-gray-200">
      <table {...table.getTableProps()} className="min-w-full">
        <thead className="bg-gray-50">
          {table.headerGroups.map((hg) => (
            <tr {...hg.getHeaderGroupProps()}>
              {hg.headers.map((col) => (
                <th
                  {...col.getHeaderProps()}
                  className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b"
                >
                  {col.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...table.getTableBodyProps()}>
          {table.rows.map((row) => {
            table.prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-gray-100">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="px-4 py-2 border-b text-sm">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
