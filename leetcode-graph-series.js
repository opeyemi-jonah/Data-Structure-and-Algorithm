/**
 * Data Structure work session with Jimmy
*https://leetcode.com/problems/find-if-path-exists-in-graph/
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
  // Convert edge list into adjacency list (convertEdgesToGraph()) as constant
  const graph = convertEdgesToGraph(edges);
  console.log(graph);
  // Implement depth-first traversal (recursively) hasPathDFS(graph, source, destination, new Set())
  return hasPath(graph, source, destination, new Set());
};

// convertEdgesToGraph(edges)
const convertEdgesToGraph = (edges) => {
  // Create graph with object initializer
  const graph = {};
  // Loop through edges
  for (let edge of edges) {
    // Destructure each edge
    const [a, b] = edge;
    // Check if a is in graph, if not, Create graph[a] as empty array
    if (!(a in graph)) graph[a] = []; 
    // check if b is in graph, if not, Create graph[b] as empty array
    if (!(b in graph)) graph[b] = [];
    // Store b in graph[a]
    graph[b].push(a);
    // Store a in graph[b]
    graph[a].push(b);
  }
  // Return graph
  return graph;
}
  

// hasPathDFS(graph, source, destination, visited)
const hasPath = (graph, source, destination, visited) => {
  // if source equals destination, return true
  if(source === destination) return true;
  // If visited HAS source return false (Avoid infinite loop)
  if(visited.has(source) === true) return false;
  // Add source to visited visited.add()
  visited.add(source);
  // Loop through neighborNodes (graph[source])
  
  for (let neighbor of graph[source]) {
    // if hasPathDFS === true
    if (hasPath(graph, neighbor, destination, visited) === true) {
      // return true
      return true;
    }
  }
  // return false
  return false;
}
  

// Code up a way to handle infinite cycles ?? DONE
// Mark each node as visited ?? DONE

console.log(validPath(3, [[0, 1], [1, 2], [2, 0]], 0, 2));
console.log(validPath(6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5));
