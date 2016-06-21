//------------------------------------------------------------------------------------------------------------------
// YOUR CODE: Create your garden "object literal" and Flower "constructor" and "prototypes" here.
//------------------------------------------------------------------------------------------------------------------

// Re-do challenge for additional practice with OOJS
// Pseudocode
// Create a flower object using constructor notation
  // Add name and color properties
  // Add identify method that returns a string that include name and color value
// Create garden object using literal notation
  // Add plant method
  // Add selectByColor and selectByName methods that return number of flowers that meet search criteria
  // Add name and location properties

function Flower(name, color) {
  this.name = name;
  this.color = color;
  this.identify = function(){
    return "I am an " + this.name + " and I am " + this.color + ".";
  };
}

var garden = {
  name: "Kula Botanical Garden",
  location: "Makawao",
  plant: function(flowers) {
    this.flowers = flowers;
  },

  selectByColor: function(color) {
    var results = [];
    flowers.forEach(function(flower) {
      if (flower.color === color) {
        results.push(flower);
      }
    });
    return results;
  },

  selectByName: function(name) {
    var results = [];
    flowers.forEach(function(flower) {
      if (flower.name === name) {
        results.push(flower);
      }
    });
    return results;
  }
}











//------------------------------------------------------------------------------------------------------------------
// DRIVER CODE: Do **NOT** change anything below this point. Your task is to implement code above to make this work.
//------------------------------------------------------------------------------------------------------------------

function assert(test, message) {
  if (!test) {
    throw "ERROR: " + message;
  }
  return true;
}

var flowers = [
  new Flower("Aster", "red"),
  new Flower("Bird of Paradise", "orange"),
  new Flower("Daffodil", "yellow"),
  new Flower("Gladiolus", "pink"),
  new Flower("Iris", "purple"),
  new Flower("Narcissus", "white"),
  new Flower("Chrysanthemum", "yellow"),
];

garden.plant(flowers);


assert(
  garden.name === "Kula Botanical Garden", "the garden has a name"
);
assert(
  garden.location === "Makawao", "the garden is located in Maui"
);
assert(
  garden.selectByColor("yellow").length === 2, "the garden should have 2 yellow flowers"
);
assert(
  garden.selectByName("Iris").length === 1, "the garden should have 1 Iris"
);
assert(
  flowers[0].identify() === "I am an Aster and I am red.", "asters are red"
);
assert(
  flowers[2].name === "Daffodil", "expected 'Daffodil'"
);
assert(
  flowers[0].identify === flowers[5].identify, "only one implementation of the identify() function should exist"
);

console.log("All tests passed");