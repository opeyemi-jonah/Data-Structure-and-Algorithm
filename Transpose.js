class Graph{
    constructor(){
        this.V = 0;
        this.adjList = new Set();
    }

};

//utility function to create a graph
function createGraph(V){
    var graph = new Graph();
    graph.V = V;
    graph.adjList = Array.from(Array(V),()=>new Set());

    return graph;
}

//Given a directed graph
//utility function that adds the edges to the Adjacency list
function addEdge(graph, src, dest)
{
 graph.adjList[src].add(dest);
}

function transposeList(graph){

console.log(graph.adjList.reverse())
}

var V = 5;
var graph = new createGraph(V);

addEdge(graph,'C','A');
addEdge(graph,'A','B');
addEdge(graph,'A','E');
addEdge(graph,'A','D');
addEdge(graph,'E','B');
addEdge(graph,'E','D');
addEdge(graph,'D','C');
