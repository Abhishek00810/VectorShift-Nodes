// transformNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TransformNode = ({ id, data }) => {
  const [transformType, setTransformType] = useState(data?.transformType || 'JSON');

  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: 'input',
      label: 'input'
    },
    {
      type: 'source',
      position: Position.Right,
      id: 'output'
    }
  ];

  return (
    <BaseNode id={id} title="Transform" handles={handles} height={140} color="#6366f1">
      <div>
        <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px', color: '#666' }}>
          Format:
        </label>
        <select 
          value={transformType} 
          onChange={(e) => setTransformType(e.target.value)}
          className="nodrag"
          style={{
            width: '100%',
            padding: '5px',
            fontSize: '12px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: 'white'
          }}
        >
          <option value="JSON">Parse JSON</option>
          <option value="CSV">Parse CSV</option>
          <option value="Extract">Extract Field</option>
          <option value="Format">Format Text</option>
        </select>
        <div style={{ marginTop: '8px', fontSize: '10px', color: '#999', fontStyle: 'italic' }}>
          Transform data formats
        </div>
      </div>
    </BaseNode>
  );
}

