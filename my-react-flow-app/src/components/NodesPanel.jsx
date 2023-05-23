import React from "react";
import NodesPanelItem from "./NodesPanelItem";
const NodesPanel = () => {
  return (
    <div className="grid grid-cols-2  gap-1 p-2">
      <NodesPanelItem type={"message"} />
    </div>
  );
};

export default NodesPanel;
