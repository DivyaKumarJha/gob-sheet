import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

export default function Toolbar() {
  const [open, setOpen] = useState(false);
  const left = ['Hide fields', 'Sort', 'Filter', 'Cell view'];
  const right = ['Import', 'Export', 'Share'];
  const panelRef = useRef<HTMLDivElement>(null);

  // Optional: Close panel if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div className="flex justify-between items-center bg-white p-3 shadow-sm relative">
      <div className="flex items-center relative">
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex items-center px-3 py-1 border rounded hover:bg-gray-100 space-x-1 z-10"
        >
          <span>Tool bar</span>
          <ChevronRight
            size={16}
            className={`transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
          />
        </button>

        {/* Thin vertical divider */}
        <div className="h-5 border-l border-gray-300 mx-3" />

        {/* Sliding panel */}
        <div
          ref={panelRef}
          className={`absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded shadow transition-all duration-300
            ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}
            flex gap-2 p-2 z-20`}
          style={{ minWidth: 'max-content' }}
        >
          {left.map((label) => (
            <button
              key={label}
              onClick={() => console.log(`${label} clicked`)}
              className="px-3 py-1 border rounded hover:bg-gray-100 whitespace-nowrap"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex space-x-2">
        {right.map((label) => (
          <button
            key={label}
            onClick={() => console.log(`${label} clicked`)}
            className="px-3 py-1 border rounded hover:bg-gray-100"
          >
            {label}
          </button>
        ))}
        <button
          onClick={() => console.log('New Action clicked')}
          className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700"
        >
          + New Action
        </button>
      </div>
    </div>
  );
}