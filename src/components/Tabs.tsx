import React, { useState } from 'react';

const tabs = ['All Orders', 'Pending', 'Reviewed', 'Arrived', '+'];

export default function Tabs() {
  const [active, setActive] = useState('All Orders');

  return (
    <div className="flex bg-white p-2 shadow-sm space-x-2">
      {tabs.map((tab) => {
        const isActive = tab === active;
        return (
          <button
            key={tab}
            onClick={() => {
              console.log(`${tab} tab clicked`);
              setActive(tab);
            }}
            className={`px-4 py-1 ${
              isActive
                ? 'border-b-2 border-black font-medium'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
