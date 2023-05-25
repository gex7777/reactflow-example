import React, { useState } from "react";

export const Topbar = ({ nodes, edges }) => {
  const [ShowError, setShowError] = useState(false);
  const handleClick = () => {
    const numberOfNodes = nodes.length;
    //get all target handles
    const targets = edges.map((e) => e.target);
    const uniqueTargetsSize = new Set(targets).size;
    // Save button press will show an error if there are more than one Nodes and more than one Nodes have empty target handles
    if (numberOfNodes === uniqueTargetsSize + 1) {
      setShowError(false);
      alert("Saved!");
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 1000);
    }
  };
  return (
    <div className=" flex h-14 items-center  bg-zinc-100  ">
      <div className="grid w-3/4 place-items-center ">
        {ShowError && (
          <div
            className="w-fit rounded-md border bg-red-200 px-5 py-2 
font-bold
          "
          >
            Cannot Save Flow{" "}
          </div>
        )}
      </div>
      <div className="grow text-center">
        <button
          onClick={handleClick}
          className="rounded-md border bg-white px-5 py-2 hover:border-2 hover:text-blue-500 hover:transition focus:border-blue-500 focus:text-blue-500"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};
