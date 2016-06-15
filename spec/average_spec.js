require('./spec_helper.js');
include('average.js');

describe("Array", function() {
  var array1 = [1, 2, 3, 4, 5, 5, 7];
  var array2 = [4, 4, 5, 5, 6, 6, 6, 7];

  describe("total", function() {
    it("is defined", function() {
      expect(new Array().total).toBeDefined();
    });

    it("returns the correct total of array 1", function() {
      expect(array1.total()).toBe(27);
    });

    it("returns the correct total of array 2", function() {
      expect(array2.total()).toBe(43);
    });
  });

  describe("mean", function() {
    it("is defined", function() {
      expect(new Array().mean).toBeDefined();
    });

    it("returns the correct mean of array 1", function() {
      expect(array1.mean()).toBe(3.857142857142857);
    });

    it("returns the correct mean of array 2", function() {
      expect(array2.mean()).toBe(5.375);
    });
  });

  describe("median", function() {
    it("is defined", function() {
      expect(new Array().median).toBeDefined();
    });

    it("returns the correct median of array 1", function() {
      expect(array1.median()).toBe(4);
    });

    it("returns the correct median of array 2", function() {
      expect(array2.median()).toBe(5.5);
    });
  });

  describe("mode", function() {
    it("is defined", function() {
      expect(new Array().mode).toBeDefined();
    });

    it("returns the correct mode of array 1", function() {
      expect(array1.mode()).toEqual({5:2});
    });

    it("returns the correct mode of array 2", function() {
      expect(array2.mode()).toEqual({6:3});
    });
  });
});
