/**Draw up your adjacency list and plot the graph
 * Then look for cases if the the graph can be any chance cyclic (infinite loop)
 * Hint: find possible and impossible cases
 */


/**
 * Write a function, undirectedPath, that takes in an array of edges for an undirected graph and 
 * two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there
 * exists a path between nodeA and nodeB.
 */

const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    return hasPath(graph, nodeA, nodeB, new Set() ); //Set stores unique values which can be used to build the visited
}

const hasPath = (graph, src, dst, visited) => {

    if (src === dst) return true; 
    if (visited.has(src)) return false;
    
    visited.add(src);

    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst, visited) === true){
            return true;
        }
    }

    return false;
}

//Convert edge list into adjacency list
const buildGraph = (edges) => {
    const graph = {};

    for (let edge of edges) {
        //destructure the edges
        const [a,b] = edge;
        //initialize a & b in the graph if they don't exist
        if (!(a in graph)) graph[a] = [];

        if(!(b in graph)) graph[b] = []; //because it's an undirected graph so it should be symmetric

        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
}


const edges = [
    ['i','j'],
    ['k','i'],
    ['m','k'],
    ['k','l'],
    ['o','n']
];

undirectedPath(edges,'j','m'); // true









