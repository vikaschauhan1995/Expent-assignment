import React, { useCallback, useState } from 'react';
import '../style/pages/Workflow.css';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge
} from 'reactflow';

import 'reactflow/dist/style.css';
import { workflowNodes, commonEdgeProps, edgePropsNoArrow } from '../constants';
import { getNodeObjectById } from '../methods/getNodeObjectById';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import { createNewNode } from '../methods/createNewNode';

const startCellStyle = {
  background: '#FFFFFF',
  borderRadius: '30px',
  display: 'flex',
  width: '108px',
  height: '36px',
  // justifyContent: 'center'
  alignItems: 'center',
  backgroundColor: 'white',
  color: '#003B4D',
  border: 'none'
};

const commonCellStyle = {
  background: 'rgba(255, 255, 255, 0.15)',
  border: '2px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '12px',
  width: '300px',
  height: '64px'
}

const unionCellStyle = {
  width: '98px',
  height: '24px',
  background: '#17BEBB',
  borderRadius: '20px',

  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '12px',
  letterSpacing: '0.01em',
  color: '#003B4D'
}

export default function Workflow() {
  const startCell = () => {
    return <>
      <div><HomeOutlinedIcon /></div>
      <div style={{ flex: 1 }}>Start</div>
      <div><RadioButtonCheckedOutlinedIcon /></div>
    </>;
  }
  const unionCell = () => {
    return <div className="Workflow__unionCell_text">Add Condition</div>
  }
  const nodeDetailById = (id) => {
    const item = getNodeObjectById(id);
    // console.log("item =>", item);
    return <div>
      <div className="Workflow__node_title">{item?.title}</div>
      <div className="Workflow__node_description">{item?.description}</div>
    </div>
  }
  const WorkFlowNodeDetail = ({ id }) => {
    const [isAddButtonClicked, setIsAddButtonClicked] = useState(false);
    const item = getNodeObjectById(id);
    const addButtonClick = () => {
      setIsAddButtonClicked(true);
      setInitialNodes(preState => {
        const currentNode = preState[id - 1];
        const newNode = createNewNode(currentNode, preState);
        setNodes([...preState, { ...newNode, data: { label: <WorkFlowNodeDetail id={parseInt(newNode.id)} /> } }]);
        console.log("parseInt(newNode.id)=>", parseInt(newNode.id));
        setEdges(prevEdgesState => {
          return [...prevEdgesState,
          {
            source: "" + id,
            target: "" + newNode.id,
            ...commonEdgeProps
          }
          ];
        });
        console.log("initialEdges =>", [...preState, newNode]);
        console.log(currentNode);
        return [...preState, newNode];
      });
    }
    return (
      <div>
        <div className="Workflow__node_title">{item?.title}</div>
        <div className="Workflow__node_description">{item?.description}</div>
        <button onClick={addButtonClick} style={{ display: isAddButtonClicked ? 'none' : 'block' }}>+</button>
      </div>
    )
  }
  const [initialNodes, setInitialNodes] = useState([
    { id: '1', position: { x: 400, y: 100 }, data: { label: startCell() }, style: startCellStyle },
    { id: '2', position: { x: 400, y: 150 }, data: { label: nodeDetailById(1) }, style: commonCellStyle },
    { id: '3', position: { x: 400, y: 300 }, data: { label: nodeDetailById(2) }, style: commonCellStyle },
    { id: '4', position: { x: 400, y: 400 }, data: { label: unionCell() }, style: unionCellStyle },
    { id: '5', position: { x: 60, y: 500 }, data: { label: <WorkFlowNodeDetail id={5} /> }, style: commonCellStyle },
    { id: '6', position: { x: 400, y: 500 }, data: { label: <WorkFlowNodeDetail id={6} /> }, style: commonCellStyle },
    { id: '7', position: { x: 750, y: 500 }, data: { label: <WorkFlowNodeDetail id={7} /> }, style: commonCellStyle },
  ]);
  const [initialEdges, setInitialEdges] = useState([
    { source: '1', target: '2', ...commonEdgeProps },
    { source: '2', target: '3', ...commonEdgeProps },
    { source: '3', target: '4', ...edgePropsNoArrow },

    { source: '4', target: '5', ...commonEdgeProps },
    { source: '4', target: '6', ...commonEdgeProps },
    { source: '4', target: '7', ...commonEdgeProps },
  ]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  // console.log("initialNodes=>", initialNodes);
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        // edges="step"
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        style={{ backgroundColor: '#003B4D' }}
      >
        <Controls />
        {/* <MiniMap /> */}
        {/* <Background variant="dots" gap={12} size={1} /> */}
      </ReactFlow>
    </div>
  );
}