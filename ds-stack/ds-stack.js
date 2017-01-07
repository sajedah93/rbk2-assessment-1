var Stack = function() {
  this.counter = 0;
  this.theStore = {};
};

Stack.prototype.add = function(value) {
	this.theStore[this.counter]=value;
	this.counter++;
	return value;
}

Stack.prototype.remove = function() {
	var storeageee = this.theStore[this.counter-1];
	delete this.theStore[--this.counter]
	return storeageee

}
Stack.prototype.storage = function() {
return Object.keys(this.theStore).length
};

