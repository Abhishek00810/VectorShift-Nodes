// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ 
            padding: '20px',
            background: 'linear-gradient(to right, #f8fafc, #f1f5f9)',
            borderBottom: '2px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
            <h2 style={{ 
                margin: '0 0 15px 0',
                fontSize: '18px',
                fontWeight: '600',
                color: '#1e293b',
                letterSpacing: '0.3px'
            }}>
                Node Toolkit
            </h2>
            <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '12px',
                alignItems: 'center'
            }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='api' label='API' />
                <DraggableNode type='database' label='Database' />
                <DraggableNode type='conditional' label='Conditional' />
                <DraggableNode type='transform' label='Transform' />
                <DraggableNode type='aggregator' label='Aggregator' />
            </div>
        </div>
    );
};
