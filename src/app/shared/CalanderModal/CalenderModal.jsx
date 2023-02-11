import React from 'react';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';

const CalenderModal = ({ selected, setSelected }) => {
  return (
    <div>
      <input type="checkbox" id="calenderModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative  border-2 justify-center flex  ">
          <DayPicker mode="range" selected={selected} onSelect={setSelected} />
          <label
            htmlFor="calenderModal"
            className="btn btn-sm  absolute bottom-8 right-16  bg-[#1ABC9C] hover:bg-[#13a58a] text-white glass  "
          >
            Done
          </label>
        </div>
      </div>
    </div>
  );
};

export default CalenderModal;
