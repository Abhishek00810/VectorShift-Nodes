// toolbar.js

import { DraggableNode } from './draggableNode';
import { useState } from 'react';

export const PipelineToolbar = () => {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div style={{ 
            padding: '16px 24px 12px',
            background: '#ffffff',
            borderBottom: '1px solid #e2e8f0',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
        }}>
            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '12px'
            }}>
                <h2 style={{ 
                    margin: '0',
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#0f172a',
                    letterSpacing: '-0.01em'
                }}>
                    Components
                </h2>
                <button
                    onClick={() => setShowInfo(!showInfo)}
                    style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        border: '1px solid #cbd5e1',
                        background: '#ffffff',
                        color: '#64748b',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s',
                        padding: '0'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = '#f1f5f9';
                        e.target.style.borderColor = '#94a3b8';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = '#ffffff';
                        e.target.style.borderColor = '#cbd5e1';
                    }}
                    title="Pipeline Builder Info"
                >
                    ?
                </button>
            </div>
            
            {showInfo && (
                <div style={{
                    marginBottom: '12px',
                    padding: '12px',
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    fontSize: '12px',
                    color: '#475569',
                    lineHeight: '1.5'
                }}>
                    <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#0f172a' }}>
                        How to use:
                    </p>
                    <ul style={{ margin: '0', paddingLeft: '20px' }}>
                        <li>Drag components from below onto the canvas</li>
                        <li>Connect nodes by dragging from output (right) to input (left) handles</li>
                        <li>Text nodes support variables: type <code style={{background: '#e2e8f0', padding: '2px 4px', borderRadius: '3px'}}>{'{{variableName}}'}</code></li>
                        <li>Click Submit to validate your pipeline (checks for cycles)</li>
                    </ul>
                </div>
            )}
            
            <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '10px',
                alignItems: 'center'
            }}>
                <DraggableNode type='customInput' label='Input' category='I/O' />
                <DraggableNode type='customOutput' label='Output' category='I/O' />
                <DraggableNode type='text' label='Text' category='Data' />
                <DraggableNode type='llm' label='LLM' category='AI' />
                <DraggableNode type='api' label='API' category='Integration' />
                <DraggableNode type='database' label='Database' category='Data' />
                <DraggableNode type='transform' label='Transform' category='Data' />
                <DraggableNode type='conditional' label='Conditional' category='Logic' />
                <DraggableNode type='aggregator' label='Aggregator' category='Logic' />
            </div>
        </div>
    );
};
