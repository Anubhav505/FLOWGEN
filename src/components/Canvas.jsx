import { useCallback, useState } from "react";
import {
  ReactFlow,
  Background,
  applyEdgeChanges,
  addEdge,
  applyNodeChanges,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import TextUpdaterNode from "./TextUpdaterNode";

const initialNodes = [
  {
    id: "1",
    type: "textUpdater",
    position: { x: 0, y: 0 },
    data: { label: "Node 1" },
  },
];
const initialEdges = [];

const nodeTypes = {
  textUpdater: TextUpdaterNode,
};

const Canvas = ({ activeTool }) => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const handlePaneClick = useCallback((e) => {
    console.log('pane clicked at', {
      x: e.clientX,
      y: e.clientY,
    }
    )
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        colorMode="light"
        panOnDrag={activeTool === "hand"}
        onPaneClick={handlePaneClick}
      >
        <Background color="#1f1f1f" variant="dots" />
      </ReactFlow>
    </div>
  );
};

export default Canvas;
