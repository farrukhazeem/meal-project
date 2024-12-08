import React, { useState, useEffect } from 'react';

export default function Modal({ isOpen, onClose, onConfirm }) {
  const [selectedWeek, setSelectedWeek] = useState(null); 

  useEffect(() => {
    if (isOpen) {
      setSelectedWeek(null); 
    }
  }, [isOpen]);

  const handleWeekSelection = (week) => {
    setSelectedWeek(week); 
  };

  const handleSave = () => {
    if (selectedWeek) {
      onConfirm(selectedWeek);
      setSelectedWeek(null); 
      onClose(); 
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-lg p-6 max-w-1/2">
        <h2 className="text-center text-black font-semibold text-xl mb-4">Select Week</h2>
        
        <div className="flex justify-center space-x-4 mb-4">
          {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((week) => (
            <button
              key={week}
              className={`px-4 py-2 border rounded-md text-sm font-medium ${
                selectedWeek === week ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
              } hover:bg-blue-300`}
              onClick={() => handleWeekSelection(week)} 
            >
              {week}
            </button>
          ))}
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <button
            type="button"
            disabled={!selectedWeek} 
            className={`text-white font-medium rounded-sm text-sm px-5 py-2.5 ${
              selectedWeek
                ? 'bg-[#004370] hover:bg-blue-800'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
            onClick={handleSave} 
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
