//------------------------------------------------------------------------------------------------------------------
// YOUR CODE: Create your Station and Bike "constructor" function and "prototypes" methods here.
//------------------------------------------------------------------------------------------------------------------

// Pseudocode
// Create a bike object using constructor notation that has an id, color, and year properties
  // Create a method to check if the bike is brandNew
// Create station object using object literal notation that has a name, location
  // Create a method to replenish bikes at a station
  // Create filtering methods for selectByColor and mostRecent
// Refactor code to make station a constructor object to allow for multiple stations

function Bike(id, color, year){
  this.id = id;
  this.color = color;
  this.year = year;
}

Bike.prototype.brandNew = function(){
  if (this.year === 2015){
    return true;
  }
}


function Station(name, location){
  this.name = name;
  this.location =location
}

Station.prototype.replenish = function(bikes){
  this.bikes = bikes;
}

Station.prototype.selectByColor = function(color){
  return this.bikes.filter(function(bike){
    return bike.color === color;
  })
}

Station.prototype.mostRecent = function(year){
  return this.bikes.filter(function(bike){
    return bike.year >= 2014;
  })
}

var station = new Station("Divvy","Wood & Division")



// var station = {
//   name: "Divvy",
//   location: "Wood & Division",
//   replenish: function(bikes){
//     this.bikes = bikes;
//   },
//   selectByColor: function(color){
//     return this.bikes.filter(function(bike){
//       return bike.color === color;
//     })
//   },
//   mostRecent: function(year){
//     return this.bikes.filter(function(bike){
//       return bike.year >= 2014;
//     })
//   }
// }






//------------------------------------------------------------------------------------------------------------------
// DRIVER CODE: Do **NOT** change anything below this point. Your task is to implement code above to make this work.
//------------------------------------------------------------------------------------------------------------------

function assert(test, message) {
  if (!test) {
    throw "ERROR: " + message;
  }
  return true;
}

var bikes = [
  new Bike(1237, "red", 2011),
  new Bike(4465, "blue", 2014),
  new Bike(1234, "red", 2011),
  new Bike(3485, "blue", 2014),
  new Bike(9485, "blue", 2015),
  new Bike(8348, "blue", 2015),
  new Bike(3485, "blue", 2014),
];

station.replenish(bikes);

assert(
  station.name === "Divvy", "the station has a name"
);
assert(
  station.location === "Wood & Division", "the station is located on Wood and Division"
);
assert(
  station.selectByColor("red").length === 2, "the station should have 2 red bikes"
);
assert(
  station.mostRecent().length === 5, "the station has 5 'new' bikes (since 2014)"
  // the mostRecent function should return all bikes built after 2014
);
assert(
  bikes[0].id === 1237, "expected 1237"
);
assert(
  bikes[2].color === "red", "expected 'red'"
);
assert(
  bikes[4].brandNew() === true, "expected 'true'"
  // the brandNew function should return true if it was built this year (2015) - hardcode this year for now
);
assert(
  bikes[0].brandNew === bikes[5].brandNew, "only one implementation of the brandNew() function should exist"
);

console.log("All tests passed");
