import React, { useState } from 'react';
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaUser, FaGlobe } from "react-icons/fa6";
import { BsEmojiSmileFill } from "react-icons/bs";
import { HiMiniHandRaised } from "react-icons/hi2";

// Define the row type with an index signature for string keys
type RowType = {
  request: string;
  submitted: string;
  status: string;
  submitter: string;
  url: string;
  assigned: string;
  priority: string;
  dueDate: string;
  estValue: string;
  extra: string;
  [key: string]: string;
};

// Generate 30 empty rows by default
const initialRows: RowType[] = Array.from({ length: 30 }, () => ({
  request: '',
  submitted: '',
  status: '',
  submitter: '',
  url: '',
  assigned: '',
  priority: '',
  dueDate: '',
  estValue: '',
  extra: '',
}));

const columns = [
  { key: 'request', label: 'Job Request' },
  { key: 'submitted', label: 'Submitted' },
  { key: 'status', label: 'Status' },
  { key: 'submitter', label: 'Submitter' },
  { key: 'url', label: 'URL' },
  { key: 'assigned', label: 'Assigned' },
  { key: 'priority', label: 'Priority' },
  { key: 'dueDate', label: 'Due Date' },
  { key: 'estValue', label: 'Est. Value' },
  { key: 'extra', label: '' }, // new empty column
];

export default function Spreadsheet() {
  const [rows, setRows] = useState<RowType[]>(initialRows);
  const [activeTab, setActiveTab] = useState('All Orders');

  const handleChange = (rowIdx: number, key: string, value: string) => {
    const updated = [...rows];
    updated[rowIdx][key] = value;
    setRows(updated);
  };

  const addRow = () => {
    setRows([
      ...rows,
      {
        request: '',
        submitted: '',
        status: '',
        submitter: '',
        url: '',
        assigned: '',
        priority: '',
        dueDate: '',
        estValue: '',
        extra: '', // new column
      },
    ]);
  };

  return (
    <div className="flex flex-col h-[80vh]">
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <table className="min-w-full pr-12">
          <colgroup>
            <col style={{ width: '30px' }} />    {/* Row number */}
            <col style={{ width: '260px' }} />   {/* Job Request (Q3 Financial Overview) */}
            <col style={{ width: '100px' }} />   {/* Submitted */}
            <col style={{ width: '100px' }} />   {/* Status */}
            <col style={{ width: '96px' }} />   {/* Submitter */}
            <col style={{ width: '127px' }} />   {/* URL */}
            <col style={{ width: '122px' }} />   {/* Assigned (ABC button) */}
            <col style={{ width: '98px' }} />    {/* Priority (half of Answer a question) */}
            <col style={{ width: '93px' }} />    {/* Due Date (half of Answer a question) */}
            <col style={{ width: '123px' }} />   {/* Est. Value (Extract button) */}
            <col style={{ width: '150px' }} />   {/* Extra button */}
          </colgroup>

          <thead>
            <tr>
              <th className="px-1 py-1 border-b border-gray-200 border-r text-left text-xs font-medium text-gray-700 sticky px-2 ml-1 top-0 bg-white z-10">#</th>
              <th className="px-1 py-1 border-b border-gray-200 border-r text-left text-xs font-medium text-gray-700 sticky top-0 bg-gray-200 z-10">
                <i className="ri-briefcase-4-line mr-1 text-base" /> Job Request
              </th>
              <th className="px-1 py-1 border-b border-gray-200 border-r text-left text-xs font-medium text-gray-700 sticky top-0 bg-gray-200 z-10">
                <HiOutlineCalendarDays className="inline mr-1 text-base" /> Submitted
              </th>
              <th className="px-1 py-1 border-b border-gray-200 border-r text-left text-xs font-medium text-gray-700 sticky top-0 bg-gray-200 z-10">
                <IoIosArrowDropdown className="inline mr-1 text-base" /> Status
              </th>
              <th className="px-1 py-1 border-b border-gray-200 border-r text-left text-xs font-medium text-gray-700 sticky top-0 bg-gray-200 z-10">
                <FaUser className="inline mr-1 text-base" /> By
              </th>
              <th className="px-1 py-1 border-b border-gray-200 border-r text-left text-xs font-medium text-gray-700 sticky top-0 bg-gray-200 z-10">
                <FaGlobe className="inline mr-1 text-base" /> URL
              </th>
              <th className="px-1 py-1 border-b border-gray-200 border-r text-left text-xs font-medium text-gray-700 sticky top-0 bg-gray-200 z-10">
                <span className="inline-block relative align-middle" style={{ height: 24, width: 24 }}>
                  <BsEmojiSmileFill className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-slate-700 z-0" />
                  <HiMiniHandRaised className="absolute left-1/2 ml-0.5 top-1/4 -translate-x-4 -translate-y-1/2 text-base text-slate-700 z-10" />
                </span>
                <span className="align-middle ml-1">Assign</span>
              </th>
              <th className="px-1 py-1 border-b border-gray-200 border-r text-left text-xs font-medium text-gray-700 sticky top-0 bg-purple-200 z-10">
                Priority
              </th>
              <th className="px-1 py-1 border-b border-gray-200 border-r text-left text-xs font-medium text-gray-700 sticky top-0 bg-purple-200 z-10">
                Due Date
              </th>
              <th className="px-1 py-1 border-b border-gray-200 text-left text-xs font-medium text-gray-700 sticky top-0 bg-orange-100 z-10 relative" style={{ borderRight: 'none' }}>
                <span className="absolute top-0 right-0 h-full w-0.5" style={{ borderRight: '2px dashed #e5e7eb', height: '100%' }}></span>
                Est. Value
              </th>
              <th className="px-1 py-1 border-b border-gray-200 border-r text-left text-xs font-medium text-gray-700 sticky top-0 bg-white z-10"></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIdx) => (
              <tr key={rowIdx}>
                <td className="px-2 py-1 border-b border-gray-200 text-gray-500 border-r text-xs h-7 min-h-7 align-middle">{rowIdx + 1}</td>
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`px-2 py-1 border-b border-gray-200 text-xs h-7 min-h-7 align-middle border-r hover:bg-gray-100 transition-colors` + (col.key === 'estValue' ? ' relative' : '')}
                    style={col.key === 'estValue' ? { borderRight: 'none' } : {}}
                  >
                    {col.key === 'estValue' && (
                      <span className="absolute top-0 right-0 h-full w-0.5" style={{ borderRight: '2px dashed #e5e7eb', height: '100%' }}></span>
                    )}
                    <input
                      className="w-full bg-transparent border-none outline-none text-xs h-5 min-h-5 align-middle"
                      value={row[col.key]}
                      onChange={e => handleChange(rowIdx, col.key, e.target.value)}
                      style={{ padding: 0, height: '20px', minHeight: '20px', fontSize: '12px' }}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Fixed Bottom Tab Bar */}
      <div className="bg-white border-t border-gray-200 px-2 py-1 flex items-center justify-between z-10">
        <div className="flex gap-2 items-center">
          {['All Orders', 'Pending', 'Reviewed', 'Arrived'].map(tab => (
            <button
              key={tab}
              className={`px-3 py-1 rounded-t border-t-4 font-semibold transition
                ${activeTab === tab
                  ? 'bg-green-50 border-green-800 text-green-900'
                  : 'bg-white border-transparent text-gray-700'}`}
              onClick={() => setActiveTab(tab)}
              style={activeTab === tab ? { boxShadow: '0 -2px 0 0 #355a3a' } : {}}
            >
              {tab}
            </button>
          ))}
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-2xl border-none shadow-none hover:bg-gray-100"
            onClick={addRow}
            title="Add Row"
            style={{ marginLeft: '8px', background: 'white', color: '#222', border: 'none', boxShadow: 'none' }}
          >
            +
          </button>
        </div>
      </div>
      
    </div>

  );
}