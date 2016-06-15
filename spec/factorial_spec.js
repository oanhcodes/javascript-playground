require('./spec_helper.js');
include('factorial.js');

describe("factorial", function() {
  it("returns 1 with 0 as an argument", function() {
    expect(factorial(0)).toEqual(1);
  });

  it("returns 1 with 1 as an argument", function() {
    expect(factorial(1)).toEqual(1);
  });

  it("calculates 10!", function() {
    expect(factorial(10)).toEqual(3628800);
  });

  it("calculates 20!", function() {
    expect(factorial(20)).toEqual(2432902008176640000);
  });
});
