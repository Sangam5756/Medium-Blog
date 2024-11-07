import React from "react";
import Avatar from "./Avatar";

const AppBar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <div className="flex flex-col justify-center">Medium</div>

      <div>
        <Avatar name="sangam" size ={"big"} />
      </div>
    </div>
  );
};

export default AppBar;
