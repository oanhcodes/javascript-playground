require('./spec_helper.js');
include('rectangle.js');

describe("rectangle functions", function() {
  var rect    = { width: 10, height: 20 };
  var square  = { width: 20, height: 20 };

  describe("area()", function() {
    it("is defined", function() {
      expect(area).toBeDefined();
    });

    it("returns the correct area of a rectangle", function() {
      expect(area(rect)).toBe(200);
    });

    it("returns the correct area of a square", function() {
      expect(area(square)).toBe(400);
    });
  });

  describe("perimeter()", function() {
    it("is defined", function() {
      expect(perimeter).toBeDefined();
    });

    it("returns the correct perimeter of a rectangle", function() {
      expect(perimeter(rect)).toBe(60);
    });

    it("returns the correct perimeter of a square", function() {
      expect(perimeter(square)).toBe(80);
    });
  });

  describe("diagonal()", function() {
    it("is defined", function() {
      expect(diagonal).toBeDefined();
    });

    it("returns the correct diagonal of a rectangle", function() {
      expect(diagonal(rect)).toBe(22.360679774997898);
    });

    it("returns the correct diagonal of a square", function() {
      expect(diagonal(square)).toBe(28.284271247461902);
    });
  });

  describe("isSquare()", function() {
    it("is defined", function() {
      expect(isSquare).toBeDefined();
    });

    it("returns false for a rectangle", function() {
      expect(isSquare(rect)).toBe(false);
    });

    it("returns true for a square", function() {
      expect(isSquare(square)).toBe(true);
    });
  });
});
