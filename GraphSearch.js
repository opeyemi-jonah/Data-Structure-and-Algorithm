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

