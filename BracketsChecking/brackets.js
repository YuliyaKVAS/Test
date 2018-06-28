
function MyStack(){
	var stack_array = [];
	var length = 0;

	this.add = function(element){
		stack_array.push(element);
		length++;
	}

	this.remove = function(){
		stack_array.splice(length-1, 1);
		length--;
	}

	this.isEmpty = function(){
		return (length === 0)
	}
}

var my_stack = new MyStack();

function bracketsCheck(myString){
	for(var i = 0; i<myString.length; i++){
		if(myString[i] === "{"){
			my_stack.add(myString[i]);
		}
		else if(myString[i] === "}" && !my_stack.isEmpty()){
			my_stack.remove();
		}else if(myString[i] === '}' && my_stack.isEmpty()){
			return false;
		}
	}

	return my_stack.isEmpty();
}

var string_1 = "{{{67+9}}";
console.log(bracketsCheck(string_1));