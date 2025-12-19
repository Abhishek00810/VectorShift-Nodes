import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#ffffff'
    }}>
      {/* App Header */}
      <div style={{
        padding: '16px 24px',
        background: '#0f172a',
        borderBottom: '1px solid #1e293b',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <h1 style={{
              margin: '0',
              fontSize: '18px',
              fontWeight: '600',
              color: '#ffffff',
              letterSpacing: '-0.01em'
            }}>
              Pipeline Builder
            </h1>
            <p style={{
              margin: '4px 0 0 0',
              fontSize: '12px',
              color: '#94a3b8'
            }}>
              Design and validate your data workflows
            </p>
          </div>
          <div style={{
            fontSize: '11px',
            color: '#64748b',
            padding: '4px 10px',
            background: '#1e293b',
            borderRadius: '4px',
            border: '1px solid #334155'
          }}>
            9 Components Available
          </div>
        </div>
      </div>
      
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
