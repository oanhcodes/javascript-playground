var FRUIT_BEARING_AGE = 5;
var MAX_AGE = 100;

var createTree = function() {
  var tree = {
    age: 0,
    height: 0,
    orangeCount: 0,
    isAlive: true,
    grow: function() {
      this.age += 1;
      this.height += 10;
      if (this.age >= FRUIT_BEARING_AGE) {
        this.orangeCount += Math.floor(Math.random() * (300- 100) + 100);
      };
      if (this.age > MAX_AGE) {
        this.isAlive = false
      };
    },
    dropOrange: function() {
      if (this.orangeCount > 0) {
        this.orangeCount -= 1;
        var orange = {};
        orange.diameter = Math.floor(Math.random() * (5 - 1) + 1);
        return orange;
      }
    }
  };
  return tree;
};

var pickOrange = function(tree) {
  return tree.dropOrange()
}

