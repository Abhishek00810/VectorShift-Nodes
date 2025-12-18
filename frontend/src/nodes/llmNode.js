// llmNode.js

import { Handle, Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {

  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: 'system',
      style: { top: '33%' } 
    },
    {
      type: 'target',
      position: Position.Left,
      id: 'prompt',
      style: { top: '66%' } 
    },
    {
      type: 'source',
      position: Position.Right,
      id: 'response'
    }
  ];
  return (
    <BaseNode id={id} title="LLM" handles={handles} color="#8b5cf6">
      <div>
        <span>This is a LLM.</span>
      </div>
    </BaseNode>
  );
}
