// textNode.js

import { useState, useEffect, useRef, useCallback } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [dimensions, setDimensions] = useState({ width: 200, height: 80 });
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  // Extract variables from text - finds all {{variableName}} patterns
  const extractVariables = useCallback((text) => {
    const regex = /\{\{(\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*)\}\}/g;
    const found = [];
    let match;
    
    while ((match = regex.exec(text)) !== null) {
      const varName = match[1].trim();
      if (!found.includes(varName)) {
        found.push(varName);
      }
    }
    
    return found;
  }, []);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // Update dimensions when text changes
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      
      const textLength = currText.length;
      const calculatedWidth = Math.max(200, Math.min(400, 200 + textLength * 2));
      const calculatedHeight = Math.max(100, scrollHeight + 60 + (variables.length * 20));
      
      setDimensions({
        width: calculatedWidth,
        height: calculatedHeight
      });
      textareaRef.current.style.height = scrollHeight + 'px';
    }
  }, [currText, variables.length]);

  // Extract variables whenever text changes
  useEffect(() => {
    const detectedVars = extractVariables(currText);
    setVariables(detectedVars);
  }, [currText, extractVariables]);

  const handles = [
    ...variables.map((varName, index) => ({
      type: 'target',
      position: Position.Left,
      id: varName,
      style: { top: `${50 + index * 25}px` },
      label: varName 
    })),
    {
      type: 'source',
      position: Position.Right,
      id: 'output'
    }
  ];
  
  return (
    <BaseNode 
      id={id} 
      title="Text" 
      handles={handles}
      width={dimensions.width}
      height={160}
      dynamic={true}
      color="#f59e0b">
    
      <div>
        <label style={{ display: 'block', marginBottom: '10px', fontSize: '12px', color: '#666' }}>
          Type text with variables (e.g., {`{{name}}`}):
        </label>
        <textarea
          ref={textareaRef}
          value={currText}
          className="nodrag"
          onChange={handleTextChange}
          placeholder="Hello {{name}}, welcome!"
          style={{
            width: '100%',
            minHeight: '40px',
            resize: 'none',
            padding: '8px',
            fontSize: '14px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontFamily: 'monospace',
            overflow: 'hidden',
            backgroundColor: '#fafafa',
            boxSizing: 'border-box'
          }}
          rows={1}
        />
      </div>
    </BaseNode>
  );
}