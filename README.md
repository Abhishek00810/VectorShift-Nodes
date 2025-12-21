# VectorShift Frontend Technical Assessment

**Candidate:** Abhishek Dadwal  
**Submission Date:** December 2025

## Overview

This project implements a complete visual pipeline builder with node abstraction, professional styling, advanced text node logic, and backend integration with DAG validation.

---

## ✅ Assessment Completion

### Part 1: Node Abstraction
- Created `BaseNode` component with dynamic sizing, colors, and handle management
- Converted 4 original nodes: Input, Output, LLM, Text
- Implemented 5 new nodes: API, Database, Conditional, Transform, Aggregator
- **Total: 9 functional nodes** using consistent abstraction pattern

### Part 2: Styling
- Professional monochromatic design system (slate gray palette)
- Clean white component cards with subtle shadows
- Dark header with app branding and live stats
- Info button with collapsible usage instructions
- Category badges for component organization (I/O, Data, AI, Integration, Logic)

### Part 3: Text Node Logic
- Dynamic resizing based on content (width and height)
- Variable detection using regex: `{{variableName}}`
- Automatic dynamic handle creation for each detected variable
- Real-time updates with overflow handling and tooltips

### Part 4: Backend Integration
- FastAPI backend with CORS middleware
- POST `/pipelines/parse` endpoint
- DAG detection using NetworkX
- Returns: `{num_nodes, num_edges, is_dag}`
- User-friendly validation alerts

---

## 🚀 Setup Instructions

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Mac/Linux
# OR on Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend will run on: `http://localhost:8000`

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend will run on: `http://localhost:3000`

---

## 🎯 Key Features

### Node System
- **BaseNode Component**: Flexible abstraction for all node types
- **Dynamic Handles**: Automatically positioned with labels
- **Variable Detection**: Text nodes create handles for `{{variables}}`
- **Overflow Handling**: Long labels show ellipsis with tooltips

### UI/UX
- **Professional Design**: Enterprise-ready monochromatic theme
- **Live Stats**: Real-time node and connection counts
- **Help System**: Info button with usage instructions
- **Category Organization**: Components grouped by type

### Backend
- **DAG Validation**: Detects cycles in pipelines
- **CORS Enabled**: Secure cross-origin requests
- **Type Safety**: Pydantic models for validation
- **Graph Analysis**: NetworkX for advanced algorithms

---

## 📁 Project Structure

```
.
├── backend/
│   ├── main.py              # FastAPI application
│   └── requirements.txt     # Python dependencies
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── nodes/
│   │   │   ├── BaseNode.js      # Core abstraction
│   │   │   ├── inputNode.js
│   │   │   ├── outputNode.js
│   │   │   ├── llmNode.js
│   │   │   ├── textNode.js      # Variable detection
│   │   │   ├── apiNode.js
│   │   │   ├── databaseNode.js
│   │   │   ├── conditionalNode.js
│   │   │   ├── transformNode.js
│   │   │   └── aggregatorNode.js
│   │   ├── App.js           # Main app with header
│   │   ├── ui.js            # React Flow canvas
│   │   ├── toolbar.js       # Component palette
│   │   ├── draggableNode.js # Toolbar items
│   │   ├── submit.js        # Validation button
│   │   └── store.js         # Zustand state
│   └── package.json
│
└── README.md
```

---

## 🛠 Tech Stack

### Frontend
- **React** 18.2.0
- **React Flow** 11.8.3 - Visual programming interface
- **Zustand** 4.5.2 - State management
- **Axios** 1.13.2 - HTTP client

### Backend
- **FastAPI** 0.115.0+ - Modern Python web framework
- **NetworkX** - Graph algorithms and DAG detection
- **Pydantic** 2.10.0+ - Data validation
- **Uvicorn** 0.32.0+ - ASGI server

---

## 🎨 Design System

### Color Palette
- **Primary Dark**: #0f172a (Header)
- **Secondary Dark**: #334155 (Buttons)
- **Text**: #475569 (Body)
- **Borders**: #e2e8f0 (Subtle)
- **Background**: #f8fafc (Canvas)

### Component Categories
- **I/O**: Input, Output
- **Data**: Text, Database, Transform
- **AI**: LLM
- **Integration**: API
- **Logic**: Conditional, Aggregator

---

## 📝 Usage Guide

1. **Drag Components**: Drag node types from the toolbar onto the canvas
2. **Connect Nodes**: Drag from output handles (right) to input handles (left)
3. **Text Variables**: Type `{{variableName}}` in text nodes to create dynamic inputs
4. **Validate**: Click "Validate Pipeline" to check for cycles and get stats

---

## 🔍 Implementation Highlights

### Node Abstraction Pattern
```javascript
<BaseNode 
  id={id} 
  title="Node Title"
  handles={[...]}
  width={200}
  height={120}
  color="#475569"
  dynamic={true}
>
  {/* Custom node content */}
</BaseNode>
```

### Variable Detection (Text Node)
```javascript
const regex = /\{\{(\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*)\}\}/g;
// Creates dynamic handles for each variable
```

### DAG Detection (Backend)
```python
Graph = nx.DiGraph()
# ... add nodes and edges
is_dag = nx.is_directed_acyclic_graph(Graph)
```

---

## ✅ Requirements Checklist

- [x] Node abstraction component
- [x] 5 new custom nodes
- [x] Professional styling and design system
- [x] Dynamic text node resizing
- [x] Variable detection and handle creation
- [x] Backend pipeline parsing endpoint
- [x] DAG cycle detection
- [x] Frontend-backend integration
- [x] User-friendly validation alerts

---

## 🎉 Conclusion

This implementation demonstrates:
- Clean, maintainable architecture with component abstraction
- Professional UI/UX design with modern best practices
- Advanced React patterns (hooks, state management, dynamic rendering)
- Backend integration with proper error handling
- Graph algorithms for pipeline validation

**Ready for production use!**

---

**GitHub Repository:** [https://github.com/Abhishek00810/VectorShift-Nodes](https://github.com/Abhishek00810/VectorShift-Nodes)
