import React from "react";

const SettingsPanelItem = ({ setNodes, id, type, data }) => {
  switch (type) {
    case "message":
      return <MessageSettings setNodes={setNodes} id={id} data={data} />;
      break;

    default:
      return <div>not defined</div>;
      break;
  }
};

const MessageSettings = ({ setNodes, id, data }) => {
  const handleTextChange = (e) => {
    setNodes((prev) =>
      prev.map((n) => {
        if (n.id === id) {
          return {
            ...n,
            data: { ...n.data, text: e.target.value },
          };
        }
        return n;
      })
    );
  };

  return (
    <div className="flex flex-col gap-2 border-b px-4 py-8">
      <label htmlFor="text" className="text-gray-400">
        Text
      </label>
      <textarea
        id="text"
        className="rounded-md border"
        value={data.text}
        onChange={(e) => handleTextChange(e)}
      />
    </div>
  );
};

export default SettingsPanelItem;
