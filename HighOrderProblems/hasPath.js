/**
 * Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph
 * and two nodes (src, dst). The function should return a boolean indicating whether or not there exists a directed
 * path between the source and destination nodes.
 */

const graph = {
    f: ['g','i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

/**Depth first traversal solution */
const hasPath = (graph, src, dst)=>{

    //Check the condition to see if the current key (src) has the value that matches the dst
    if (src === dst) return true;

    //recursively run the function on the neighbors to find the match as well
    for (let neighbor of graph[src])
        if (hasPath(graph, neighbor, dst)=== true)
            return true;

    return false;
}

/**Breadth first traversal solution */
const hasPathBfs = (graph,src,dst)=>{
    
    //create a queue
    const queue = [src];

    while (queue.length > 0){
        const current = queue.shift();
        if (current === dst){
            return true;
        }

        for (let neighbor of graph[current]){

            //push that signle neighbor into the queue at the top and run through the function top to bottom (here)
            queue.push(neighbor);
        }
    }

    //if the While doesn't find a true condition then return false outside the While loop
    return false;  

}


hasPath(graph, 'f','k'); //true