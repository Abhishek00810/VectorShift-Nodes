// submit.js
import {useStore} from './store'
import axios from 'axios'
export const SubmitButton = () => {

    const nodes = useStore((state)=>state.nodes);
    const edges = useStore((state)=>state.edges);

    const handleSubmit = async () =>{
        try{
            const pipelineData= {
                nodes: nodes,
                edges: edges
            };  
            console.log({nodes, edges})

            const response = await axios.post('http://localhost:8000/pipelines/parse', pipelineData);
            const result = response.data;

            // Display user-friendly alert
            const dagStatus = result.is_dag ? '✓ Valid DAG' : '✗ Not a DAG (contains cycles)';
            alert(
                `Pipeline Analysis:\n\n` +
                `Nodes: ${result.num_nodes}\n` +
                `Edges: ${result.num_edges}\n` +
                `${dagStatus}`
            );
        }
        catch (error) {
            alert('Error connecting to backend: ' + error.message);
        }
    }
    return (
        <div style={{
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            padding: '16px 24px',
            background: '#ffffff',
            borderTop: '1px solid #e2e8f0'
        }}>
            <div style={{
                fontSize: '12px',
                color: '#64748b'
            }}>
                <span style={{ fontWeight: '500', color: '#475569' }}>
                    {nodes.length} {nodes.length === 1 ? 'node' : 'nodes'}
                </span>
                {' • '}
                <span style={{ fontWeight: '500', color: '#475569' }}>
                    {edges.length} {edges.length === 1 ? 'connection' : 'connections'}
                </span>
            </div>
            
            <button 
                type="submit" 
                onClick={handleSubmit}
                style={{
                    padding: '10px 24px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'white',
                    background: '#334155',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.15s ease',
                    letterSpacing: '-0.01em'
                }}
                onMouseEnter={(e) => {
                    e.target.style.background = '#1e293b';
                    e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.background = '#334155';
                    e.target.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08)';
                }}
            >
                Validate Pipeline
            </button>
        </div>
    );
}
