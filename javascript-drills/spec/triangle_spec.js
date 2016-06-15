require('./spec_helper.js');
include('triangle.js');

describe("validTriangle()", function() {
  var pythagoreanTriple = [65, 72, 97];

  it("is defined as a function", function() {
    expect(typeof validTriangle).toBe('function');
  });

  it("expects three arguments", function() {
    expect(validTriangle.length).toBe(3);
  });

  it("returns true for an equilateral triangle", function() {
    expect(validTriangle(10,10,10)).toBe(true);
  });

  it("returns false if any of the arguments are 0", function() {
    expect(validTriangle(1,1,0)).toBe(false);
    expect(validTriangle(1,0,1)).toBe(false);
    expect(validTriangle(0,1,1)).toBe(false);
  });

  it("returns true for permutations of a Pythagorean triple", function() {
    expect(validTriangle.apply(this, pythagoreanTriple)).toBe(true);
    expect(validTriangle.apply(this, pythagoreanTriple.reverse())).toBe(true);
    expect(validTriangle(pythagoreanTriple[1], pythagoreanTriple[2], pythagoreanTriple[0])).toBe(true);
  });
});
