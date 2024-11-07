import React from "react";

const Avatar = ({ name }: { name: string }) => {
  return (
      <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-500 rounded-full dark:bg-gray-600">
        <span className="font-sm font-extralight text-black dark:text-gray-300">
          {name[0]}
        </span>
      </div>
    
  );
};

export default Avatar;
