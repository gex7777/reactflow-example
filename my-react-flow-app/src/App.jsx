import React, { useMemo, useRef, useState, useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  Controls,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import { Sidebar } from "./components/Sidebar";
import { MessageNode } from "./components/MessageNode";
import { Topbar } from "./components/Topbar";

let id = 0;
const getId = () => `dndnode_${id++}`;

function App() {
  //setup react flow
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  //for getting x,y bounds
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  //memo Nodes
  const nodeTypes = useMemo(() => ({ message: MessageNode }), []);
  const isValidConnection = (connection) => {
    const isConnected = edges.some((n) => n.source === connection.source);

    return !isConnected;
  };
  const onConnect = useCallback((params) => {
    setEdges((eds) => addEdge(params, eds));
  }, []);
  //handle drag
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  //handle drop
  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { text: "" },
      };

      setNodes((prev) => [...prev, newNode]);
    },
    [reactFlowInstance]
  );

  return (
    <ReactFlowProvider>
      <div className="flex h-screen flex-col ">
        <Topbar nodes={nodes} edges={edges} />
        <div className="flex grow ">
          <div className=" reactflow-wrapper w-3/4 " ref={reactFlowWrapper}>
            <ReactFlow
              nodeTypes={nodeTypes}
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onInit={setReactFlowInstance}
              onDrop={onDrop}
              onDragOver={onDragOver}
              isValidConnection={isValidConnection}
              fitView
            >
              <Controls />
            </ReactFlow>
          </div>
          <div className="  grow border-l-[1px] border-gray-200 ">
            <Sidebar nodes={nodes} setNodes={setNodes} />
          </div>
        </div>
      </div>
    </ReactFlowProvider>
  );
}

export default App;
