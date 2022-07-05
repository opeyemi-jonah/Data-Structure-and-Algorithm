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
function addEdges(graph, src, dest){
    graph.adjList[src].add(dest);
    // graph.adjList[dest].add(src); if the graph given is undirected then it makes sense to add from dest to src

}


