import React, { useCallback } from "react";

import { Handle, Position } from "reactflow";
import { ReactComponent as MessageIcon } from "../assets/chat-text.svg";
import { ReactComponent as WhatsappIcon } from "../assets/whatsapp.svg";

export const MessageNode = ({ data, selected }) => {
  return (
    <>
      <Handle type="target" position={Position.Left} id="target" />
      <div
        className={`selected selectable flex h-12 w-44 flex-col rounded-md text-[8px] leading-none shadow-md  ${
          selected ? " ring-1 ring-slate-500" : ""
        }`}
      >
        <div className=" flex  items-center justify-between rounded-t-md bg-teal-100 px-2 pb-1 pt-[2px]">
          <div className="flex items-center gap-1">
            <div className="w-[6px] pt-1">
              <MessageIcon />
            </div>
            <div className="text-[8px] font-bold">Send Message</div>
          </div>

          <div className="rounded-full bg-white p-[1px] ">
            <div className="w-2 ">
              <WhatsappIcon />
            </div>
          </div>
        </div>
        <div
          className={`grow overflow-hidden rounded-b-md bg-white p-[6px] ${
            data.text === "" && "font-light text-gray-700"
          }`}
        >
          {data.text !== "" ? data.text : "sample text"}
        </div>
      </div>
      <Handle type="source" position={Position.Right} id="source" />
    </>
  );
};
