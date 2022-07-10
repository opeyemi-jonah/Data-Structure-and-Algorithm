// This is from GeeksForGeeks
class Graph {
    constructor()
    {
        this.V = 0;
        this.adjList = new Set();
    }
};
 
// A utility function that creates a graph of V vertices
function createGraph(V)
{
    var graph = new Graph();
    graph.V = V;
 
    // Create an array of sets representing
    // adjacency lists.  Size of the array will be V
    //An empty array of size V is created and then the function creates a new set which is then applied to each index
    graph.adjList = Array.from(Array(V), ()=>new Set());
    console.log("------> "+graph.adjList);
 
    return graph;
}
 
// Adds an edge to an undirected graph
function addEdge(graph, src, dest)
{
    // Add an edge from src to dest.  A new
    // element is inserted to the adjacent
    // list of src.
    graph.adjList[src].add(dest);
 
    // Since graph is undirected, add an edge
    // from dest to src also
    graph.adjList[dest].add(src);
    // console.log(Array.isArray(graph.adjList));
}
 
// A utility function to print the adjacency
// list representation of graph
function printGraph(graph)
{
    for (var i = 0; i < graph.V; ++i) {
        var lst = graph.adjList[i];
        console.log( "Adjacency list of vertex "+i);
 
        for(var item of [...lst].reverse())
            console.log( item + " ");
        console.log("\n");
    }
}
 
// Searches for a given edge in the graph
function searchEdge(graph, src, dest)
{
    if (!graph.adjList[src].has(dest))
        console.log( "Edge from " + src
               + " to " + dest + " not found.\n");
    else
        console.log( "<br> Edge from " + src
             + " to " + dest + " found." + "\n \n");
}
 
// Driver code
// Create the graph given in the above figure
var V = 5;
var graph = createGraph(V);
addEdge(graph, 0, 1);
addEdge(graph, 0, 4);
addEdge(graph, 1, 2);
addEdge(graph, 1, 3);
addEdge(graph, 1, 4);
addEdge(graph, 2, 3);
addEdge(graph, 3, 4);
 
// Print the adjacency list representation of
// the above graph
printGraph(graph);
 
// Search the given edge in the graph
searchEdge(graph, 2, 1);
searchEdge(graph, 0, 3);
 
// This code is contributed by rutvik_56.