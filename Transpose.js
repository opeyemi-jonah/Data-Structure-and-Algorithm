class Graph{
    constructor(){
        this.V = 0;
        this.adjList = new Set();
    };

};

//utility function to create a graph
function createGraph(V){
    let graph = new Graph();
    graph.V = V;
    graph.adjList = Array.from(Array(V),()=>new Set());

    return graph;
}

//Given a directed graph
//utility function that adds the edges to the Adjacency list
function addEdge(graph, src, dest){
    for (let i = 0; i< V)
   graph.adjList[src].add(dest);
    // graph.adjList[dest].add(src); if the graph given is undirected then it makes sense to add from dest to src
    
}

function transposeList(graph){

console.log(graph.adjList.reverse())
}

var V = 5;
var graph = new createGraph();

addEdge(graph,'C','A');
addEdge(graph,'A','B');
addEdge(graph,'A','E');
addEdge(graph,'A','D');
addEdge(graph,'E','B');
addEdge(graph,'E','D');
addEdge(graph,'D','C');
