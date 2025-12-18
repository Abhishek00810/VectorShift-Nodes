// inputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const handles = [
    {
      type: "source",
      position: Position.Right,
      id: 'value'
    }
  ];

  return (
    <BaseNode id={id} title="Input" handles={handles} height={150} color="#3b82f6">
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px' }}>
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
            className="nodrag"
            style={{
              width: '100%',
              padding: '4px',
              marginTop: '4px',
              fontSize: '12px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
        </label>
        <label style={{ display: 'block', fontSize: '12px' }}>
          Type:
          <select 
            value={inputType} 
            onChange={handleTypeChange} 
            className='nodrag'
            style={{
              width: '100%',
              padding: '4px',
              marginTop: '4px',
              fontSize: '12px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              backgroundColor: 'white'
            }}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>

  );
}
