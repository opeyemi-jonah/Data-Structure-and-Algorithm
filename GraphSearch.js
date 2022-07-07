  //Represent this data as a graph
  const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

  const routes = [
    ['PHX','LAX'],
    ['PHX','LAX'],
    ['JFK','OKC'],
    ['JFK','HEL'],
    ['JFK','LOS'],
    ['MEX','LAX'],
    ['MEX','BKK'],
    ['MEX','LIM'],
    ['MEX','EZE'],
    ['LIM','BKK'],
  ]

//STEP 1    Initialize the graph. This is used to store the nodes and edges in preferred format ('Key' =>'Value' pair).
  const adjacencyList = new Map();
  const visited = new Set();

  
//STEP 2    Add node to the graph
  function addNode(airport){
    adjacencyList.set(airport, []);
  }

//STEP 3    Add edge to the graph, undirected
  function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin)
  }

//STEP 4  Create the Graph
  airports.forEach(addNode);
  routes.forEach(route => addEdge(...route));

//   console.log(adjacencyList);

 //Apply BFS
 function bfs(start){

    //The process of traversing a graph with BFS can be represented with a queue
    //queue is just an array with Fifo. First item in queue should be the start of the traverse
    const queue = [start];

    while (queue.length > 0 /*while the queue has items in it*/){
        //grab the first item in the array using the shift method
        const airport = queue.shift(); //mutates the queue

        const destinations = adjacencyList.get(airport);

        for (const destination of destinations){
            queue.push(destination);

            if (destination === 'BKK'){
                console.log('found it! ');
            }

            //The code above online 53 runs into an inifinite loop becaue the queue is never empty
            //Introduce a Set obj at the global level to mark already visited nodes

            if (!visited.has(destination)){

                //This marks the destination as visited by adding it to the visited set obj
                visited.add(destination); 

                //Then it is safe to add the code that adds the destination to the queue
                queue.push(destination);
            }
        }
    }
 }

console.log(bfs('PHX'));

//Apply DFS
function dfs(start, visited = new Set()){

    //add the start to visited. 
    visited.add(start);

    const destinations = adjacencyList.get(start);
    console.log("Start: "+start+"\n Desitnations: "+destinations);

    for (const dest of destinations) {

        if (destination === 'BKK'){
            console.log(`DFS found Bangkok in steps`)
            return
        }

        if (!visited.has(destination)){
            dfs(destination, visited);
        }
    }

}
console.log(dfs('PHX'));


