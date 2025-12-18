// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };

    // Color mapping for each node type
    const colorMap = {
      customInput: '#3b82f6',
      customOutput: '#10b981',
      llm: '#8b5cf6',
      text: '#f59e0b',
      api: '#ef4444',
      database: '#14b8a6',
      conditional: '#eab308',
      transform: '#6366f1',
      aggregator: '#10b981'
    };

    const nodeColor = colorMap[type] || '#3b82f6';
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{ 
          cursor: 'grab', 
          minWidth: '100px', 
          height: '50px',
          display: 'flex', 
          alignItems: 'center', 
          borderRadius: '8px',
          background: `linear-gradient(135deg, ${nodeColor} 0%, ${nodeColor}dd 100%)`,
          justifyContent: 'center', 
          flexDirection: 'column',
          boxShadow: `0 4px 6px -1px ${nodeColor}40, 0 2px 4px -1px ${nodeColor}30`,
          border: `2px solid ${nodeColor}`,
          transition: 'all 0.2s ease',
          fontWeight: '500',
          fontSize: '13px'
        }} 
        draggable
        onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
      >
          <span style={{ color: '#fff', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>{label}</span>
      </div>
    );
  };

 