Array.prototype.total = function() {
  return this.reduce(function(a,b){
    return a + b;
  })
};

Array.prototype.mean = function() {
  var length = this.length;
  return this.total()/length;
};

Array.prototype.median = function() {
  // Your code here!
};

Array.prototype.mode = function() {
  // Your code here!
  // Ex. Mode array:
  // var mode = { 5:3, 6:3 }
};
