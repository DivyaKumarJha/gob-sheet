import React, { useState } from "react";

const Header: React.FC = () => {
     const [showSidebar, setShowSidebar] = useState(false);
     return (
          <>
               <header className="flex items-center justify-between px-3 py-2 border-b border-gray-200 bg-white">
                    {/* Breadcrumb */}
                    <nav className="flex items-center text-sm space-x-1">
                         {/* Green icon */}
                         <span className="relative w-6 h-5 border-2 border-lime-700 rounded-md mr-4.5 ">
                              <span className="absolute right-0 top-0 h-full w-[40%] bg-lime-700 rounded-none"></span>
                         </span>
                         <span className="text-gray-400">Workspace</span>
                         <span className="text-gray-300">{'>'}</span>
                         <span className="text-gray-400">Folder 2</span>
                         <span className="text-gray-300">{'>'}</span>
                         <span className="font-semibold text-gray-900">Spreadsheet 3</span>
                         <button className="font-semibold ml-2 text-bold  mb-2 text-gray-400">...</button>
                    </nav>

                    {/* Search and actions */}
                    <div className="flex items-center gap-2">
                         {/* Search */}
                         <div className="flex items-center  rounded px-3 bg-gray-200 focus-within:ring-2 focus-within:ring-blue-400 h-7 min-w-0">
                              <i className="ri-search-line text-gray-400 text-base mr-1"></i>
                              <input
                                   type="text"
                                   placeholder="Search within sheet"
                                   className="px-0.5 py-1 rounded text-[10px] min-w-0 w-24 focus:outline-none bg-transparent placeholder:text-[10.5px]"
                                   style={{ fontSize: '10px' }}
                              />
                         </div>
                         {/* Notification bell */}
                         <div className="relative">
                              <button
                                   className="text-lg text-gray-600 cursor-pointer focus:outline-none w-7 h-7 flex items-center justify-center"
                                   title="Notifications"
                                   onClick={() => setShowSidebar(true)}
                              >
                                   <i className="ri-notification-2-line"></i>
                              </button>
                              <span className="absolute top-1 right-1.5 -translate-y-1/2 translate-x-1/2 bg-lime-800 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center border-2 border-white">2</span>                         </div>
                         {/* User info */}
                         <div className="flex items-center gap-1">
                              <img src="https://ui-avatars.com/api/?name=John+Doe" alt="User Avatar" className="w-6 h-6 rounded-full" />
                              <div className="flex flex-col leading-tight">
                                   <span className="font-medium text-xs text-gray-900">John Doe</span>
                                   <span className="text-[10px] text-gray-500">john.doe@email.com</span>
                              </div>
                         </div>
                    </div>
               </header>
               {/* Notification Sidebar/Modal */}
               {showSidebar && (
                    <div className="fixed inset-0 z-40 flex justify-end">
                         {/* Overlay */}
                         <div className="fixed inset-0 backdrop-blur-[2px]" onClick={() => setShowSidebar(false)}></div>                         {/* Sidebar */}
                         <div className="relative w-80 max-w-full h-full bg-white shadow-lg p-6 flex flex-col z-50">
                              <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl" onClick={() => setShowSidebar(false)}>&times;</button>
                              <h2 className="text-lg font-semibold mb-4">Notifications</h2>
                              <div className="space-y-4">
                                   <div className="p-3 bg-gray-100 rounded-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                   <div className="p-3 bg-gray-100 rounded-md">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                              </div>
                         </div>
                    </div>
               )}
          </>



     );
};

export default Header;