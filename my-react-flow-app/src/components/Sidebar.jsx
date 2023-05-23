import React from "react";
import SettingsPanel from "./SettingsPanel";
import NodesPanel from "./NodesPanel";

export const Sidebar = ({ nodes, setNodes }) => {
  const selectedNodes = nodes.filter((n) => n.selected);

  // if a node selected? display settings Panel
  if (selectedNodes.length > 0) {
    const { id, type, data } = selectedNodes[0];

    return (
      <SettingsPanel data={data} id={id} type={type} setNodes={setNodes} />
    );
  }

  //else display nodes Panel
  return <NodesPanel />;
};
