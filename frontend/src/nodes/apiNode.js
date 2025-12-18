// apiNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const APINode = ({ id, data }) => {
  const [method, setMethod] = useState(data?.method || 'GET');

  const handleMethodChange = (e) => {
    setMethod(e.target.value);
  };

  // Define handles configuration
  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: 'endpoint',
      style: { top: '25%' },
      label: 'endpoint'
    },
    {
      type: 'target',
      position: Position.Left,
      id: 'body',
      style: { top: '50%' },
      label: 'body'
    },
    {
      type: 'target',
      position: Position.Left,
      id: 'headers',
      style: { top: '75%' },
      label: 'headers'
    },
    {
      type: 'source',
      position: Position.Right,
      id: 'response'
    }
  ];

  return (
    <BaseNode 
      id={id} 
      title="API Call" 
      handles={handles}
      height={150}
      color="#ef4444">
    
      <div>
        <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px', color: '#666' }}>
          Method:
        </label>
        <select 
          value={method} 
          onChange={handleMethodChange}
          className="nodrag"
          style={{
            width: '100%',
            padding: '5px',
            fontSize: '12px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: 'white',
            cursor: 'pointer'
          }}
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
        <div style={{ marginTop: '8px', fontSize: '10px', color: '#999', fontStyle: 'italic' }}>
          Make HTTP requests to external APIs
        </div>
      </div>
    </BaseNode>
  );
}