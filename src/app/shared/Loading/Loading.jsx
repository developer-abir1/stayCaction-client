import React from 'react';
import { AiTwotoneThunderbolt } from 'react-icons/ai';
const Loading = () => {
  return (
    <div className=" flex  justify-center  items-center   ">
      <AiTwotoneThunderbolt
        size={50}
        className="  text-secondary animate-pulse"
      />
    </div>
  );
};

export default Loading;
