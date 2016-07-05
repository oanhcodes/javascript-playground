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
  var length = this.length;
  if(length % 2 != 0){
    return this[Math.floor(length/2)];
  } else {
    return (this[(length/2) - 1] + this[length/2])/2
  }
};

Array.prototype.mode = function() {
  // Your code here!
  // Ex. Mode array:
  // var mode = { 5:3, 6:3 }
};
