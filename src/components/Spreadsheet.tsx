import React, { useState } from 'react';
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { IoIosArrowDropdown, IoIosArrowDown } from "react-icons/io";
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
            <col style={{ width: '0px' }} />   {/* white button */}

          </colgroup>

          <thead>
            <tr>
              <th className="px-1 py-1 border-b border-gray-200 border-r text-left text-md font-mediium text-gray-400 sticky px-2 ml-2 top-0 bg-gray-200 z-10">#</th>
              <th className="px-1 py-1 border-b border-gray-200 border-r text-left text-xs font-medium text-gray-500 sticky top-0 bg-gray-200 z-10">
                <i className="ri-briefcase-4-line mr-1 text-base" /> Job Request
              </th>
              <th className="px-1 py-1 border-b border-gray-200 border-r text-left sticky top-0 bg-gray-200 z-10">
                <span className="flex items-center text-[11px] font-medium text-gray-500">
                  <HiOutlineCalendarDays className="inline mr-1 text-base" />
                  <span>Submitted</span>
                  <IoIosArrowDown className="inline ml-2 align-middle" style={{ fontSize: '11px', verticalAlign: 'middle' }} />
                </span>
              </th>
              <th className="px-1 py-1 border-b border-gray-200 border-r text-left text-xs font-medium text-gray-500 sticky top-0 bg-gray-200 z-10">
                <IoIosArrowDropdown className="inline mr-1 text-base" /> Status <IoIosArrowDown className="inline ml-4 align-middle" style={{ fontSize: '11px', verticalAlign: 'middle' }} />
              </th>
              <th className="px-1 py-1 border-b border-gray-200 border-r text-left text-xs font-medium text-gray-500 sticky top-0 bg-gray-200 z-10">
                <FaUser className="inline mr-1 text-base" /> By <IoIosArrowDown className="inline ml-8 align-middle" style={{ fontSize: '11px', verticalAlign: 'middle' }} />
              </th>
              <th className="px-1 py-1 border-b border-gray-200 border-r text-left text-xs font-medium text-gray-500 sticky top-0 bg-gray-200 z-10">
                <FaGlobe className="inline mr-1 text-base" /> URL <IoIosArrowDown className="inline ml-14 align-middle" style={{ fontSize: '11px', verticalAlign: 'middle' }} />
              </th>
              <th className="px-1 py-1 border-b border-gray-200 border-r text-left text-xs font-medium text-gray-500 sticky top-0 z-10 bg-[rgba(151,170,123,0.3)]">
                <span className="flex items-center">
                  <span className="inline-block relative align-middle mr-1" style={{ height: 24, width: 24 }}>
                    <BsEmojiSmileFill className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-slate-500 z-0" />
                    <HiMiniHandRaised className="absolute left-1/2 ml-0.5 top-1/4 -translate-x-4 -translate-y-1/2 text-base text-slate-500 z-10" />
                  </span>
                  <span className="align-middle ml-1 text-gray-500 font-medium">Assign</span>
                </span>
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
              <th className="px-1 py-1 border-b border-gray-200 border-r text-left text-xs font-medium text-gray-700 sticky top-0 bg-white z-10 relative">
                {/* Dotted line in header for last column */}
                <span className="absolute top-0 right-6.5 h-full w-0.5" style={{ borderRight: '2px dashed #e5e7eb', height: '100%' }}></span>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* First 5 static rows as plain text, not inputs, with dotted lines for Est. Value and extra columns, and correct alignment/rupee symbol */}
            <tr>
              <td className="px-2 py-1 border-b border-gray-200 text-gray-500 border-r text-xs h-7 min-h-7 align-middle">1</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-left text-gray-900">Launch social media campaign for pro...</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-right text-gray-700">15-11-2024</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle">In-process</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-left text-gray-700">Aisha Patel</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-black underline text-left cursor-pointer">www.aishapatel..........</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-left text-gray-700">Sophie Choudhury</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-orange-500 font-semibold">Medium</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-right text-gray-700">20-11-2024</td>
              <td className="px-2 py-1 border-b border-gray-200 text-xs h-7 min-h-7 align-middle text-right text-gray-700 relative">
                <span className="absolute top-0 right-0 h-full w-0.5" style={{ borderRight: '2px dashed #e5e7eb', height: '100%' }}></span>
                6,200,000
                <span className="text-gray-400 ml-1">&#8377;</span>
              </td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle relative">
                <span className="absolute top-0 right-6.5 h-full w-0.5" style={{ borderRight: '2px dashed #e5e7eb', height: '100%' }}></span>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-1 border-b border-gray-200 text-gray-500 border-r text-xs h-7 min-h-7 align-middle">2</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-left text-gray-900">Update press kit for company redesign</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-right text-gray-700">28-10-2024</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle">Need to start</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-left text-gray-700">Irfan Khan</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-black underline text-left cursor-pointer">www.irfankhanpat.....</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-left text-gray-700">Tejas Pandey</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-red-500 font-semibold">High</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-right text-gray-700">30-10-2024</td>
              <td className="px-2 py-1 border-b border-gray-200 text-xs h-7 min-h-7 align-middle text-right text-gray-700 relative">
                <span className="absolute top-0 right-0 h-full w-0.5" style={{ borderRight: '2px dashed #e5e7eb', height: '100%' }}></span>
                3,500,000
                <span className="text-gray-400 ml-1">&#8377;</span>
              </td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle relative">
                <span className="absolute top-0 right-6.5 h-full w-0.5" style={{ borderRight: '2px dashed #e5e7eb', height: '100%' }}></span>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-1 border-b border-gray-200 text-gray-500 border-r text-xs h-7 min-h-7 align-middle">3</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-left text-gray-900">Finalize user testing feedback for app...</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-right text-gray-700">05-12-2024</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle">In-process</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-left text-gray-700">Mark Johnson</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-black underline text-left cursor-pointer">www.markjohns.......</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-left text-gray-700">Rachel Lee</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-orange-500 font-semibold">Medium</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-right text-gray-700">10-12-2024</td>
              <td className="px-2 py-1 border-b border-gray-200 text-xs h-7 min-h-7 align-middle text-right text-gray-700 relative">
                <span className="absolute top-0 right-0 h-full w-0.5" style={{ borderRight: '2px dashed #e5e7eb', height: '100%' }}></span>
                4,750,000
                <span className="text-gray-400 ml-1">&#8377;</span>
              </td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle relative">
                <span className="absolute top-0 right-6.5 h-full w-0.5" style={{ borderRight: '2px dashed #e5e7eb', height: '100%' }}></span>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-1 border-b border-gray-200 text-gray-500 border-r text-xs h-7 min-h-7 align-middle">4</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-left text-gray-900">Design new features for the website</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-right text-gray-700">10-01-2025</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle">Complete</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-left text-gray-700">Emily Green</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-black underline text-left cursor-pointer">www.emilygreen......</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-left text-gray-700">Tom Wright</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-blue-500 font-semibold">Low</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-right text-gray-700">15-01-2025</td>
              <td className="px-2 py-1 border-b border-gray-200 text-xs h-7 min-h-7 align-middle text-right text-gray-700 relative">
                <span className="absolute top-0 right-0 h-full w-0.5" style={{ borderRight: '2px dashed #e5e7eb', height: '100%' }}></span>
                5,900,000
                <span className="text-gray-400 ml-1">&#8377;</span>
              </td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle relative">
                <span className="absolute top-0 right-6.5 h-full w-0.5" style={{ borderRight: '2px dashed #e5e7eb', height: '100%' }}></span>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-1 border-b border-gray-200 text-gray-500 border-r text-xs h-7 min-h-7 align-middle">5</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-left text-gray-900">Prepare financial report for Q4</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-right text-gray-700">25-01-2025</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle">Blocked</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-left text-gray-700">Jessica Brown</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-black underline text-left cursor-pointer">www.jessicabroo......</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-left text-gray-700">Kevin Smith</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-blue-500 font-semibold">Low</td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle text-right text-gray-700">30-01-2025</td>
              <td className="px-2 py-1 border-b border-gray-200 text-xs h-7 min-h-7 align-middle text-right text-gray-700 relative">
                <span className="absolute top-0 right-0 h-full w-0.5" style={{ borderRight: '2px dashed #e5e7eb', height: '100%' }}></span>
                2,800,000
                <span className="text-gray-400 ml-1">&#8377;</span>
              </td>
              <td className="px-2 py-1 border-b border-gray-200 border-r text-xs h-7 min-h-7 align-middle relative">
                <span className="absolute top-0 right-6.5 h-full w-0.5" style={{ borderRight: '2px dashed #e5e7eb', height: '100%' }}></span>
              </td>
            </tr>
            {/* ...existing editable rows... */}
            {rows.slice(5).map((row, rowIdx) => (
              <tr key={rowIdx + 5}>
                <td className="px-2 py-1 border-b border-gray-200 text-gray-500 border-r text-xs h-7 min-h-7 align-middle">{rowIdx + 6}</td>
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`px-2 py-1 border-b border-gray-200 text-xs h-7 min-h-7 align-middle border-r hover:bg-gray-100 transition-colors` + (col.key === 'estValue' || col.key === 'extra' ? ' relative' : '')}
                    style={col.key === 'estValue' || col.key === 'extra' ? { borderRight: 'none', position: 'relative' } : {}}
                  >
                    {/* Dotted line for Est. Value and last column */}
                    {col.key === 'estValue' && (
                      <span className="absolute top-0 right-0 h-full w-0.5" style={{ borderRight: '2px dashed #e5e7eb', height: '100%' }}></span>
                    )}
                    {col.key === 'extra' && (
                      <span className="absolute top-0 right-6.5 h-full w-0.5" style={{ borderRight: '2px dashed #e5e7eb', height: '100%' }}></span>
                    )}
                    <input
                      className="w-full bg-transparent border-none outline-none text-xs h-5 min-h-5 align-middle"
                      value={row[col.key]}
                      onChange={e => handleChange(rowIdx + 5, col.key, e.target.value)}
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
      <div className="bg-white border-t border-gray-200 px-7 flex items-center justify-between z-10">
        <div className="flex gap-2 items-center">
          {['All Orders', 'Pending', 'Reviewed', 'Arrived'].map(tab => (
            <button
              key={tab}
              className={`px-3 py-1  border-t-1 font-semibold transition
                ${activeTab === tab
                  ? 'bg-green-50 border-green-800 text-green-900'
                  : 'bg-white border-transparent text-gray-700'}`}
              onClick={() => {
                setActiveTab(tab);
                console.log(`${tab} button clicked`);
              }}
              style={activeTab === tab ? { boxShadow: '0 -2px 0 0 #355a3a' } : {}}
            >
              {tab}
            </button>
          ))}
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-2xl border-none shadow-none hover:bg-gray-100"
            onClick={() => {
              addRow();
              console.log('Add Row button clicked');
            }}
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