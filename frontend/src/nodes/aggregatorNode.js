// aggregatorNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const AggregatorNode = ({ id, data }) => {
  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: 'input1',
      style: { top: '30%' },
      label: 'input1'
    },
    {
      type: 'target',
      position: Position.Left,
      id: 'input2',
      style: { top: '50%' },
      label: 'input2'
    },
    {
      type: 'target',
      position: Position.Left,
      id: 'input3',
      style: { top: '70%' },
      label: 'input3'
    },
    {
      type: 'source',
      position: Position.Right,
      id: 'combined'
    }
  ];

  return (
    <BaseNode id={id} title="Aggregator" handles={handles} height={140} color="#10b981">
      <div>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>
          Combine multiple inputs
        </div>
        <div style={{ fontSize: '10px', color: '#999', fontStyle: 'italic' }}>
          Merge parallel processing results
        </div>
      </div>
    </BaseNode>
  );
}

