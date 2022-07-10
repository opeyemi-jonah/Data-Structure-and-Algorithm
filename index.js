//GeekForGeeks lecture

// Javascript code to demonstrate Graph representation
// using ArrayList in Java
 
// A utility function to add an edge in an
    // undirected graph
    function addEdge(adj,u,v)
    {
        //
       console.log("v: "+v+'\n');
        adj[u].push(v);
        
        console.log("u: "+u);
        adj[v].push(u);
         
    }
     
    // A utility function to print the adjacency list
        // representation of graph
    function printGraph(adj)
    {
        console.log(adj);
        for (let i = 0; i < adj.length; i++) {
                // console.log("\nAdjacency list of vertex " + i);
                
                for (let j = 0; j < adj[i].length; j++) {
                    // console.log("length of j is: "+adj[i].length+" :"+adj[i]);
                    // console.log("head -> "+adj[i][j]);
                
                }
                // console.log("____________________________");
            }
    }
     
    // Driver Code
    // Creating a graph with 5 vertices
            let V = 5;
            let adj= [];
              
            for (let i = 0; i < V; i++)
                adj.push([]); //we push a matrix into the adj array.
      
            // Adding edges one by one. Given there are seven edges in this graph
            addEdge(adj, 0, 1);
            addEdge(adj, 0, 4);
            addEdge(adj, 1, 2);
            addEdge(adj, 1, 3);
            addEdge(adj, 1, 4);
            addEdge(adj, 2, 3);
            addEdge(adj, 3, 4);
        
              
            printGraph(adj);
     