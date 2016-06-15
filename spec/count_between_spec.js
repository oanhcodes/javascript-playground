require('./spec_helper.js');
include('count_between.js');

describe("countBetween()", function() {
  it("returns 0 for an empty array", function() {
    expect(countBetween([], -100, 100)).toEqual(0);
  });

  it("returns 0 if upperBound < lowerBound", function() {
    var array = [1,2,3,4,5,6,7,8,9,10];
    expect(countBetween(array, 100, -100)).toEqual(0);
  });

  it("returns the count if lowerBound == upperBound", function() {
    expect(countBetween([1,1,1], 1, 1)).toEqual(3);
  });

  it("doesn't count integers below the lower bound", function() {
    expect(countBetween([-10, 1, 2], 0, 100)).toEqual(2);
  });

  it("doesn't count integers above the upper bound", function() {
    expect(countBetween([1, 2, 200], 0, 100)).toEqual(2);
  });

  it("returns the size of the array if the array is inside the bounds", function() {
    // A random 100-element array
    var array = []
    for(var i=0; i < 100; i++) {
      array.push(Math.floor(Math.random() * 101) - 50);
    }

    expect(countBetween(array, -50, 50)).toEqual(100);
  });
});
