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
            justifyContent: 'center',
            padding: '20px',
            background: 'linear-gradient(to right, #f8fafc, #f1f5f9)',
            borderTop: '2px solid #e2e8f0'
        }}>
            <button 
                type="submit" 
                onClick={handleSubmit}
                style={{
                    padding: '12px 32px',
                    fontSize: '15px',
                    fontWeight: '600',
                    color: 'white',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.5), 0 2px 4px -1px rgba(59, 130, 246, 0.3)',
                    transition: 'all 0.2s ease',
                    letterSpacing: '0.3px'
                }}
                onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 8px -1px rgba(59, 130, 246, 0.6), 0 4px 6px -1px rgba(59, 130, 246, 0.4)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 6px -1px rgba(59, 130, 246, 0.5), 0 2px 4px -1px rgba(59, 130, 246, 0.3)';
                }}
            >
                Submit Pipeline
            </button>
        </div>
    );
}
