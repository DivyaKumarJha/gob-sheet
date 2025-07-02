// Row.tsx
import React, { useState } from 'react';
import { VscEyeClosed } from "react-icons/vsc";
import { TbArrowAutofitHeight } from "react-icons/tb";
import { TfiDownload } from "react-icons/tfi";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { PiArrowsSplitBold } from "react-icons/pi";
import { MdInsertLink } from "react-icons/md";
import { BsArrowRepeat } from "react-icons/bs";

export default function Toolbar() {
     const [open, setOpen] = useState(false);

     const left = ['Hide fields', 'Sort', 'Filter', 'Cell view'];
     const right = ['Import', 'Export', 'Share'];

     return (
          <>
               <div className="flex justify-between items-center bg-white py-0.5 px-2 shadow-sm">
                    <div className="flex items-center">
                         <button
                              onClick={() => setOpen(!open)}
                              className="flex items-center px-3 py-1 rounded hover:bg-gray-100 space-x-1"
                         >
                              <span>Tool bar</span>
                              {!open && (
                                   <i className="ri-arrow-right-double-line text-lg  ml-1"></i>
                              )}
                         </button>

                         <div className="h-7 border-l border-gray-300 mx-3" />

                         {open && (
                              <div className="flex space-x-2">
                                   {/* Hide fields */}
                                   <button
                                        key={left[0]}
                                        onClick={() => console.log(`${left[0]} clicked`)}
                                        className="px-3 py-1 rounded hover:bg-gray-100 flex items-center gap-1"
                                   >
                                        <VscEyeClosed className="text-lg" />
                                        {left[0]}
                                   </button>
                                   {/* Sort */}
                                   <button
                                        key={left[1]}
                                        onClick={() => console.log(`${left[1]} clicked`)}
                                        className="px-3 py-1 rounded hover:bg-gray-100 flex items-center gap-1"
                                   >
                                        <i className="ri-arrow-up-down-line text-lg"></i>
                                        {left[1]}
                                   </button>
                                   {/* Filter */}
                                   <button
                                        key={left[2]}
                                        onClick={() => console.log(`${left[2]} clicked`)}
                                        className="px-3 py-1 rounded hover:bg-gray-100 flex items-center gap-1"
                                   >
                                        <i className="ri-filter-3-fill text-lg"></i>
                                        {left[2]}
                                   </button>
                                   {/* Cell view */}
                                   <button
                                        key={left[3]}
                                        onClick={() => console.log(`${left[3]} clicked`)}
                                        className="px-3 py-1 rounded hover:bg-gray-100 flex items-center gap-1"
                                   >
                                        <TbArrowAutofitHeight className="text-lg" />
                                        {left[3]}
                                   </button>
                              </div>
                         )}
                    </div>

                    <div className="flex space-x-2">
                         {/* Import */}
                         <button
                              onClick={() => console.log('Import clicked')}
                              className="px-2 py-1 flex items-center border border-gray-200 rounded hover:bg-gray-100 flex text-gray-500 items-center gap-1"
                         >
                              <TfiDownload className="text-base text-gray-500" />
                              Import
                         </button>
                         <button
                              onClick={() => console.log('Export clicked')}
                              className="px-2 flex items-center py-1 border border-gray-200 rounded hover:bg-gray-100 flex text-gray-500 items-center gap-1"
                         >
                              <TfiDownload className="text-base text-gray-500" style={{ transform: "rotate(180deg)" }} />
                              Export
                         </button>
                         <button
                              onClick={() => console.log('Share clicked')}
                              className="px-2 flex items-center py-1 border border-gray-200 rounded hover:bg-gray-100 flex items-center text-gray-500 gap-1"
                         >
                              <FaRegShareFromSquare className="text-base text-gray-500" />
                              Share
                         </button>
                         <button
                              onClick={() => console.log('New Action clicked')}
                              className="px-4 py-1 bg-lime-700 text-white rounded flex items-center gap-1 hover:bg-lime-800"
                         >
                              <PiArrowsSplitBold className='text-white mt-1' />

                              New Action
                         </button>
                    </div>
               </div>
               <div className="mx-6 max-w-full">
                    <div className="flex w-full h-10 border border-gray-200 rounded shadow overflow-hidden">
                         {/* 45% gray with content */}
                         <div className="h-full flex items-center px-2" style={{ width: "45%", background: "#d1d5db" }}>
                              <button className="flex items-center gap-2 bg-gray-200 border border-gray-300 rounded px-3 py-1 text-gray-500 font-medium hover:bg-gray-100 transition">
                                   <MdInsertLink className="text-lg text-blue-400" />
                                   Financial Overview
                              </button>
                              <BsArrowRepeat className="text-lg text-orange-500 ml-2 rotate-90" />
                         </div>
                         {/* 10% white*/}
                         <button style={{ width: "10%", background: "#fff" }} className="h-full flex items-center justify-center border-none">
                              <span className="text-2xl text-gray-400 font-bold"></span>
                         </button>
                         {/* 10% green: PiArrowsSplitBold + ABC */}
                         <button style={{ width: "10%", background: "#4ade80" }} className="h-full flex items-center justify-center gap-1 border-none">
                              <PiArrowsSplitBold className="text-gray-700 text-lg" />
                              <span className="text-gray-700 text-sm font-medium">ABC</span>
                         </button>
                         {/* 15.5% purple: PiArrowsSplitBold + Answer a question */}
                         <button style={{ width: "15.5%", background: "#a78bfa" }} className="h-full flex items-center justify-center gap-1 border-none">
                              <PiArrowsSplitBold className="text-gray-700 text-lg" />
                              <span className="text-gray-700 text-sm font-medium">Answer a question</span>
                         </button>
                         {/* 10% orange: PiArrowsSplitBold + Extract */}
                         <button style={{ width: "10%", background: "#fb923c" }} className="h-full flex items-center justify-center gap-1 border-none">
                              <PiArrowsSplitBold className="text-gray-700 text-lg" />
                              <span className="text-gray-700 text-sm font-medium">Extract</span>
                         </button>
                         {/* Remaining space: purple button */}
                         <button style={{ width: "9.5%" }} className="h-full flex text-4xl mb-4 font-light flex items-center justify-center bg-gray-200 gap-1 border-none">
                              <span className="text-gray-800 text-4xl mb-1.5 font-light">+</span>
                         </button>
                    </div>
               </div>
               {/* Vertical lines */}
               <div className="relative w-full" style={{ height: "calc(95vh - 100px)" }}>
                    <div className="absolute left-6 top-0 h-full w-px bg-gray-200"></div>
                    <div className="absolute right-6 top-0 h-full w-px bg-gray-200"></div>
               </div>
          </>
     );
}
