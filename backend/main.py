from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any
import networkx as nx  # Import the graph library

app = FastAPI()

# Add CORS middleware (THIS WAS MISSING!)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 2. Define the JSON Structure (Matches what Frontend sends)
class PipelineData(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: PipelineData):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    # Build the Graph for DAG check
    Graph = nx.DiGraph()
    for node in pipeline.nodes:
        Graph.add_node(node['id'])
    for edge in pipeline.edges:
        Graph.add_edge(edge['source'], edge['target'])

    is_dag = nx.is_directed_acyclic_graph(Graph)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }