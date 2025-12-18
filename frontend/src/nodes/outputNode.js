// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: 'value'
    }
  ]
  
  return (
    <BaseNode id={id} title="Output" handles={handles} height={170} color="#10b981">
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px' }}>
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
            className='nodrag'
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
            value={outputType} 
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
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>

  );
}
