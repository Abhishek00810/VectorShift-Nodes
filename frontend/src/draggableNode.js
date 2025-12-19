// draggableNode.js

export const DraggableNode = ({ type, label, category }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };

    // Professional color scheme - muted and cohesive
    const colorMap = {
      customInput: '#475569',      // Slate gray
      customOutput: '#64748b',     // Slate gray (lighter)
      llm: '#334155',              // Dark slate
      text: '#475569',             // Slate gray
      api: '#64748b',              // Slate gray (lighter)
      database: '#475569',         // Slate gray
      conditional: '#64748b',      // Slate gray (lighter)
      transform: '#334155',        // Dark slate
      aggregator: '#475569'        // Slate gray
    };

    const nodeColor = colorMap[type] || '#475569';
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{ 
          cursor: 'grab', 
          minWidth: '100px', 
          height: '45px',
          display: 'flex', 
          alignItems: 'center', 
          borderRadius: '6px',
          background: '#ffffff',
          justifyContent: 'center', 
          flexDirection: 'column',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08)',
          border: '1px solid #e2e8f0',
          transition: 'all 0.2s ease',
          fontWeight: '500',
          fontSize: '13px'
        }} 
        draggable
        onMouseEnter={(e) => {
          e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)';
          e.target.style.borderColor = '#cbd5e1';
        }}
        onMouseLeave={(e) => {
          e.target.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08)';
          e.target.style.borderColor = '#e2e8f0';
        }}
      >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: '#334155', fontWeight: '500', letterSpacing: '0.2px' }}>{label}</span>
            {category && (
              <span style={{
                fontSize: '9px',
                color: '#64748b',
                background: '#f1f5f9',
                padding: '2px 5px',
                borderRadius: '3px',
                fontWeight: '500',
                letterSpacing: '0.3px'
              }}>
                {category}
              </span>
            )}
          </div>
      </div>
    );
  };

 