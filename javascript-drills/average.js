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
  var numHash = [];
  for(var i = 0; i < this.length; i++){
    if(numHash[this[i]] == undefined){
      numHash[this[i]] = 1;
    } else {
      numHash[this[i]] ++;
    }
  }

  return Object.keys(numHash).reduce(function(a,b){
    var max = numHash[a] > numHash[b] ? a:b ;
  });

  // var modeArray = [];
  // for(key in numHash){
  //   modeArray.push(numHash[key]);
  // }

  // var max = Math.max(...modeArray);
  // for(key in numHash){
  //   if(numHash[key] == max){
  //     return key = numHash[key];
  //   }
  // }

};
