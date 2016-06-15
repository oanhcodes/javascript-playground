var FRUIT_BEARING_AGE = 6;
var MAX_AGE = 100;

function Orange(){
  this.diameter = Math.floor(Math.random()*5);
} 

function createTree(){
  return new Tree();
}

function Tree(){
  this.age = 0;
  this.height = 0;
  this.orangeCount = 0;
  this.isAlive = true;
}

Tree.prototype.grow = function(){
    this.age += 1;
    this.height += 10;
    if(this.age >= FRUIT_BEARING_AGE){
      this.orangeCount += Math.floor(Math.random()*(300-100) + 100);
    }
    if(this.age > MAX_AGE){
      this.isAlive = false;
    }
  };

Tree.prototype.dropOrange = function(){
  if(this.age >= FRUIT_BEARING_AGE){
    this.orangeCount -= 1;
    return new Orange();
  }
};

Tree.prototype.pickOrange = function(){
  if(this.orangeCount > 0) {
    this.orangeCount -= 1;
    return new Orange();
  }
};
