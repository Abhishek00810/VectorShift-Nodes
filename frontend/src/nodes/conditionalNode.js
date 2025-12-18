// conditionalNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const ConditionalNode = ({ id, data }) => {
  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: 'condition',
      label: 'condition'
    },
    {
      type: 'source',
      position: Position.Right,
      id: 'true',
      style: { top: '40%' },
      label: 'true'
    },
    {
      type: 'source',
      position: Position.Right,
      id: 'false',
      style: { top: '60%' },
      label: 'false'
    }
  ];

  return (
    <BaseNode id={id} title="Conditional" handles={handles} height={120} color="#eab308">
      <div>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>
          Branch workflow based on condition
        </div>
        <div style={{ fontSize: '10px', color: '#999', fontStyle: 'italic' }}>
          Routes to true/false paths
        </div>
      </div>
    </BaseNode>
  );
}

