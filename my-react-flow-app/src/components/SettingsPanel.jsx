import React from "react";
import { useStore } from "reactflow";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import SettingsPanelItem from "./SettingsPanelItem";

const SettingsPanel = ({ type, data, id, setNodes }) => {
  const resetSelected = useStore((store) => store.resetSelectedElements);

  return (
    <div className="flex flex-col">
      <div className="heading relative flex  h-12 items-center justify-center border-y ">
        <div
          className="backarrow absolute left-4 w-4 cursor-pointer"
          onClick={() => resetSelected()}
        >
          <ArrowLeft />
        </div>

        <div className="relative">{type}</div>
      </div>
      <div>
        <SettingsPanelItem
          type={type}
          setNodes={setNodes}
          id={id}
          data={data}
        />
      </div>
    </div>
  );
};

export default SettingsPanel;
