// Here is your first test rewritten to expect a constructor function.
describe ("Tree", function(){
  var orangeTree;

  beforeEach(function() {
    orangeTree=new Tree();
  });

  it("should return a tree object", function(){
    expect(orangeTree).toBeDefined();
  });
});

  describe ("createTree", function() {
  var newTree;

  beforeEach(function() {
    newTree=createTree();
  });

  it("should return a tree object", function() {
    expect(createTree()).toBeDefined();
  });

  describe("that has", function() {
    it("age 0 when created", function() {
      expect(newTree.age).toEqual(0);
    });
    it("height 0 when created", function() {
      expect(newTree.height).toEqual(0);
    });
    it("orangeCount of 0 oranges when created", function() {
      expect(newTree.orangeCount).toEqual(0);
    });
  });

  describe("and whose grow function", function() {
    it("should increase the age of the tree by 1 year", function() {
      newTree.grow();
      expect(newTree.age).toEqual(1);
    });
    it("should increase the height of the tree by 10 inches", function() {
        newTree.grow();
        expect(newTree.height).toEqual(10);
    });
  });
  describe("Before reaching fruit-bearing age", function() {
    it("should have 0 oranges if age < FRUIT_BEARING_AGE", function() {
      while (newTree.age < (FRUIT_BEARING_AGE-1)) {
        newTree.grow();
      }
      expect(newTree.orangeCount).toEqual(0);
    });
  });
  describe("After reaching fruit-bearing age", function() {
    beforeEach(function() {
      while (newTree.age < FRUIT_BEARING_AGE) {
        newTree.grow();
      }
    });

    it("should add a random number of oranges if age = FRUIT_BEARING_AGE", function() {
      expect(newTree.orangeCount).toBeGreaterThan(0);
    });

    describe("dropOrange", function() {
      it("should return an orange that is removed from oranges", function() {
        expect(newTree.dropOrange()).toBeDefined();
      });
    });
    describe ("die",function() {
      it("should be alive when age <= MAX_AGE",function() {
        while (newTree.age < (MAX_AGE-1)) {
          newTree.grow();
        }
        newTree.grow();
        expect(newTree.isAlive).toEqual(true);
      });
    });
      it("should die when age > MAX_AGE",function() {
      while (newTree.age < MAX_AGE) {
        newTree.grow();
      }
      newTree.grow();
      expect(newTree.isAlive).toEqual(false);
      });
    });

  describe ("pickOrange, a function to manipulate a tree", function() {
    it("should return a orange object", function() {
      while (newTree.age < FRUIT_BEARING_AGE) {
        newTree.grow();
      }
      expect(newTree.pickOrange).toBeDefined();
    });
    it("should return an orange with a random diameter > 0", function() {
      while (newTree.age < FRUIT_BEARING_AGE) {
        newTree.grow();
      }
      var orange = newTree.pickOrange();
      expect(orange.diameter).toBeGreaterThan(0);
    });
  });
});

// Copy the rest of the specs from plain-old-js-objects-spec.js one at a time and modify them to use constructor function OO.
