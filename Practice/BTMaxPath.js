/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


var maxPathSum = function(root) {
       
       const result = [root.val];
    
    function dfs(root){
        
        if (!root) return 0;
        
        //recursively traverse the left & right tree for their max respectively
        let leftMax = dfs(root.left);
        let rightMax = dfs(root.right);
        
        //update the leftMax with the max value and guard against negative values by adding 0
        leftMax = Math.max(leftMax, 0);
        rightMax = Math.max(rightMax, 0);
        
        //compute with splitting the tree-> Adding all 3 (root node, left node, right node) 
        //checking the max between the parent root node and the split computation
        result[0] = Math.max(result[0],root.val + leftMax + rightMax);
        
        //return the compute without splitting the tree
        return root.val + Math.max(leftMax, rightMax);
        
    }
    
    dfs(root);
    
    return result[0];
    
    
};

//Solution provided by Neetcode
