//Structy lecture
/**
 * This problem needs two mechanism
 * One- is to use iterative code to hop to different connected components
 * Two- a traversal code to explore some single component as far as possible
 * @param {boolean} graph 
 * @param {number} count
 * current is a node = key
 * visited stores already visited nodes
 * neighbor are the edges
 * undirected graph
 */

const connectedComponentsCount = (graph) =>{
    const visited = new Set();
    let count = 0;
    
    //starting the iterative code. let node(the key) in graph
    for (let node in graph) { 
        if (explore(graph, node, visited)=== true) //begin traversal at every potential node
            count += 1;
    } 
};

const explore = (graph, current, visited)=> {
    if (visited.has(String(current))) return false;

    visited.add(String(current));

    for (let neighbor of graph[current]){
        explore (graph, neighbor);
    }

    return true;
}
