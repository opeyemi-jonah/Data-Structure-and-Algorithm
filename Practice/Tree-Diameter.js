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
var diameterOfBinaryTree = function(root) {
  
    if (root === null) return 0;
    
    const leftHeight = height(root.left);
    const rightHeight = height(root.right);
    
    const leftDiameter = diameterOfBinaryTree(root.left);
    const rightDiameter = diameterOfBinaryTree(root.right);
    
    // console.log(1 + leftHeight + rightHeight);
    // console.log(Math.max(leftHeight,rightHeight));
    
    const theMaxResult = Math.max(leftHeight + rightHeight, Math.max(leftDiameter,rightDiameter));
    
    return theMaxResult;
  
};

const height = (root) => {
    
    if ( root === null ) return 0;
    
    const left = height(root.left);
    const right = height(root.right);
    
    
    if (left > right){
        return 1 + left;
    }
    
    else {
        
       return 1 + right;
         
         }
    
};
