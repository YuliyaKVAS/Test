function List_New(){
	var memory = [];
	//test fvfd
	var length = 0;

	this.my_get = function(adress){
		return memory[adress];
	}

	this.my_push = function(value){
		memory[length] = value;
		length++;
	}

	this.my_pop = function(){
		if(length === 0) return;
		var LastAdress = length-1;
		var LastValue = memory[LastAdress];
		delete memory[LastAdress];
		length--;
		return memory;
	}

	this.my_unshift = function(value){
		var previuus = value;
		for(var adress = 0; adress<length; adress++){
			var current = memory[adress];
			memory[adress] = previuus;
			previuus = current;
		}
		memory[length] = previuus;
		length++;
	}

	this.my_shift = function(){
		if(length === 0) return;
		var FirstValue = memory[0];
		for(var adress = 0; adress<length-1; adress++){
			memory[adress] = memory[adress+1];
		}
		delete memory[length-1];
		length--;
		return memory;
	}

	this.mediun_del = function(position){
		if(length === 0) return;
		var med_value = memory[position];
		for(var adress = position; adress< length-1; adress++){
			memory[adress] = memory[adress+1];
		}

		delete memory[length-1];
		length--;
		return memory;
	}
	this.delete_elem = function(position){
		if(length === 0) return;
		memory.splice(position, 1);
		return memory;
	}
	this.add_in_middle = function(position, value){
		var new_elem = value;
		for(var i = position; i<length; i++){
			var current = memory[i];
			memory[i] = new_elem;
			new_elem = current;
		}
		memory[length] = new_elem;
		length++;
		return memory;
	}

}

var list1 = new List_New();
list1.my_push(1);
list1.my_push(2);
list1.my_push(3);
list1.my_push(4);
list1.my_push(5);

//console.log(list1.add_in_middle(3, 6));
//console.log(list1.delete_elem(1));
//console.log(list1.my_shift());
console.log(list1.mediun_del(2));
//console.log(list1.my_get(2));
//console.log(list1.my_get(1));
//console.log(list1.my_pop());
//list1.my_unshift(1111);
//console.log(list1.my_get(0));
//console.log(list1.my_shift());

