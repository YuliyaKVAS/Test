var BinaryTreeNode = function(value){
	this.value = value,
	this.left = null,
	this.right = null
}

class BinaryTree{
	constructor(){
		this.root = null;
		this.count = 0;
	}

	addTo(value){
		var node = new BinaryTreeNode(value);
		if(this.root === null){
			this.root = node;
			this.count++;
		}else{
			var current = this.root;
			while(true){
				if(value<current.value){
					if(!current.left){
						current.left = node;
						this.count++;
						break;
					}
					current = current.left;
				}
				if(value>current.right){
					if(!current.right){
						current.right = node;
						this.count++;
						break;
					}
					current = current.right;
				}else{
					break;
				}
			}
		}
	}

	contains(value){
		var current = this.root;
		while(current){
			if(value<current.value){
				current = current.left;
			}
			if(value>current.value){
				current = current.right;
			}else{
				return true
			}
		}
		return false;
	}

	/*remove(value){
		var removeNode = function(node, value){
			var countNew = this.count;
			if(node === null){
				return null;
			}
			if(value === node.value){
				if((node.left===null) && (node.right===null)){
					countNew--;
					return null;
				}
				if(node.right === null){
					countNew--;
					return node.left;
				}
				if(node.left===null){
					countNew--;
					return node.right;
				}
				var tempNode = node.right;
				while(node.left!==null){
					tempNode = tempNode.left;
				}
				node.value = tempNode.value;
				node.right = removeNode(node.right, tempNode.value);
				return node;
			}else if(value<node.value){
				node.left = removeNode(node.left, value);
				return node;
			}else{
				node.right = removeNode(node.right, value);
				countNew--;
				return node;
			}
		}
		this.root = removeNode(this.root, value);
	}*/
	size(){
		return this.count;
	}
// Обход дерева (в глубину)
	preorder(){
		if(this.root === null){
			return null;
		}
		else{
			var result = new Array();
			function traversePre(node){
				result.push(node.value);
				node.left && traversePre(node.left);
				node.right && traversePre(node.right);
			}
			traversePre(this.root);
		}
			return result;
	}
	// Обход дерева (в глубину)
	postorder(){
		if(this.root === null){
			return null;
		}
		else{
			var result = new Array();
			function traversePost(node){
				node.left && traversePost(node.left);
				node.right && traversePost(node.right);
				result.push(node.value);
			}
			traversePost(this.root);
		}
		return result;
	}
// Обход в ширину
	levelOrder(){
		var result = [];
		var queue = [];
		if(this.root!== null){
			queue.push(this.root);
			while(queue.length>0){
				var node = queue.shift();
				result.push(node.value);
				if(node.left!==null){
					queue.push(node.left);
				}
				if(node.right!==null){
					queue.push(node.right);
				}
			}
		}
		return result;
	}


}

var a  = new BinaryTree();
a.addTo(4);
a.addTo(2);
a.addTo(5);
a.addTo(1);
a.addTo(3);
a.addTo(7);
a.addTo(6);
a.addTo(8);
console.log(a.preorder())
console.log(a.postorder())
console.log(a.levelOrder())
//console.log(a.size())
/*console.log(a.contains(7));
a.remove(7);
console.log(a.contains(8))
//console.log(a.remove(700));
console.log(a.contains())
console.log(a.size())*/
