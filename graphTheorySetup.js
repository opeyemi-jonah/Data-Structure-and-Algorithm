/** 
 * Depth first traversal
 * Uses Stack
 * Stack operations: Push & Pop
 * Add to top, remove from top
 * 
*/


/** Step One
Start with first node in the stack called start/source
The idea is to pop the current/visited node from the stack and push the neighbor to the stack
*/
// const depthFirstPrint = (graph, source)=> {
    
//     //To make a stack is simply create an array and use pop and push on it
//     const stack = [source];

//     //while the stack is not empty
//     while (stack.length > 0){

//         //remove the top item and return its value
//         const current = stack.pop();
//         console.log(current);
        
//         //Getting the neighbors of the current node by targeting them individually to push on to the stack
//         for (let neighbor of graph[current]){
//             stack.push(neighbor);
//         }
//     }
// };

//Recursion version
const depthFirstPrint = (graph, source)=>{
    console.log(source);
    for (let neighbor of graph[source])
        depthFirstPrint(graph, neighbor)

}

const graph = {
    a: ['b','c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

depthFirstPrint(graph, 'a'); //abdfce

/**
 * Breadth first traversal
 * Uses Queue
 * Queue operations: shift & push
 * Add to back remove from front
 */

/**
 * Step One
 */
const breadthFirstPrint = (graph, source)=>{
    const queue = [source];
    while (queue.length > 0){
        const current = queue.shift();
        console.log(current);

        for (let neighbor of graph[current]){
            queue.push(neighbor);
        }
            
    }
};

breadthFirstPrint(graph,'a');