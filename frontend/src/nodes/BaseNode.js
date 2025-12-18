// BaseNode.js
import { Handle, Position } from 'reactflow';

export const BaseNode = ({ 
  id, 
  title, 
  children, 
  handles = [],
  width = 200,
  height = 80,
  style = {},
  dynamic = false,
  color = '#3b82f6'  // Default blue
}) => {
  return (
    <div style={{
      width,
      height,
      border: `2px solid ${color}`,
      padding: '15px',
      position: 'relative',
      background: `linear-gradient(135deg, ${color}15 0%, ${color}05 100%)`,
      borderRadius: '12px',
      transition: dynamic ? 'all 0.2s ease' : 'none',
      boxShadow: `0 4px 6px -1px ${color}40, 0 2px 4px -1px ${color}30`,
      overflow: 'visible',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }}>  
      {handles.map((handle, index) => (
        <>
          <Handle
            key={`${id}-${handle.id || index}`}
            type={handle.type}
            position={handle.position}
            id={`${id}-${handle.id}`}
            style={{
              width: '12px',
              height: '12px',
              background: color,
              border: '3px solid white',
              boxShadow: `0 0 0 1px ${color}`,
              ...handle.style
            }}
          />
          {handle.label && (
            <div
              key={`label-${id}-${handle.id || index}`}
              style={{
                position: 'absolute',
                left: handle.position === Position.Left ? '-80px' : 'auto',
                right: handle.position === Position.Right ? '-80px' : 'auto',
                top: handle.style?.top || '50%',
                transform: 'translateY(-50%)',
                fontSize: '10px',
                color: '#555',
                backgroundColor: '#f0f0f0',
                padding: '2px 6px',
                borderRadius: '3px',
                whiteSpace: 'nowrap',
                border: '1px solid #ddd',
                fontWeight: '500',
                pointerEvents: 'none',
                zIndex: 10,
                width: '50px',          // Fixed width
                textAlign: 'center'     // Center text
              }}
            >
              {handle.label}
            </div>
          )}
        </>
      ))}
      <div style={{
        marginBottom: '8px', 
        fontWeight: '600', 
        fontSize: '14px',
        color: color,
        letterSpacing: '0.3px'
      }}>
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
}