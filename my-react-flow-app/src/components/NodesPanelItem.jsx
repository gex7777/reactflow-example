import React from "react";
import { ReactComponent as MessageIcon } from "../assets/chat-text.svg";

const NodesPanelItem = ({ type }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  switch (type) {
    case "message":
      return <PanelItemMessage onDragStart={onDragStart} />;
      break;
    //add more panelItemtypes cases
    default:
      return <div>not defined</div>;
      break;
  }
};

export default NodesPanelItem;

const PanelItemMessage = ({ onDragStart }) => {
  return (
    <div
      className="dndnode ga flex cursor-grab flex-col items-center justify-center gap-2 rounded-md border-2 border-indigo-500 px-10 py-3 text-indigo-500"
      onDragStart={(event) => onDragStart(event, "message")}
      draggable
    >
      <div className="w-6">
        <MessageIcon />
      </div>
      <div className="text-xl"> Message</div>
    </div>
  );
};

//define more PanelItemTypes here
