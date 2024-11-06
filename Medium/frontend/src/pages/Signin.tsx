import React from "react";
import Signup from "../components/Signup";
import Label from "../components/Label";

const Signin = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <Signup />
      </div>

      <div>
        <Label />
      </div>
    </div>
  );
};

export default Signin;
