// databaseNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const DatabaseNode = ({ id, data }) => {
  const [dbType, setDbType] = useState(data?.dbType || 'Vector');

  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: 'query',
      style: { top: '40%' },
      label: 'query'
    },
    {
      type: 'target',
      position: Position.Left,
      id: 'connection',
      style: { top: '60%' },
      label: 'connection'
    },
    {
      type: 'source',
      position: Position.Right,
      id: 'results'
    }
  ];

  return (
    <BaseNode id={id} title="Database" handles={handles} height={140} color="#14b8a6">
      <div>
        <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px', color: '#666' }}>
          Type:
        </label>
        <select 
          value={dbType} 
          onChange={(e) => setDbType(e.target.value)}
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
          <option value="Vector">Vector DB</option>
          <option value="SQL">SQL</option>
          <option value="NoSQL">NoSQL</option>
        </select>
        <div style={{ marginTop: '8px', fontSize: '10px', color: '#999', fontStyle: 'italic' }}>
          Query databases for RAG
        </div>
      </div>
    </BaseNode>
  );
}

