require('./spec_helper.js');
include('pad.js');

describe("Array", function() {
  var emptyArray  = [];
  var array       = [1,2,3];
  var longArray   = [1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3];
  var allArrays   = [emptyArray, array, longArray];

  describe("pad", function() {
    it("doesn't pad a long array", function() {
      var newArray = longArray.pad(10);
      expect(newArray.length).toEqual(longArray.length);
    });

    it("pads elements to the end of the array", function() {
      for (var i=0; i<allArrays.length; i++) {
        var padSize = 1 + Math.floor(Math.random() * 50);
        var padArray = [];
        for(var n=0; n<padSize; n++) {
          padArray.push('apple');
        }
        var expectedResult = allArrays[i].concat(padArray);

        expect(allArrays[i].pad(allArrays[i].length + padSize, 'apple')).toEqual(expectedResult);
      }
    });

    it("doesn't pad when minimum size is equal to the array's length", function() {
      for(var i=0; i < allArrays.length; i++) {
        expect(allArrays[i].pad(allArrays[i].length)).toEqual(allArrays[i]);
      }
    });

    it("doesn't pad when the minimum size is 0", function() {
      for(var i=0; i < allArrays.length; i++) {
        expect(allArrays[i].pad(0)).toEqual(allArrays[i]);
      }
    });

    it("pads with null by default", function() {
      expect(emptyArray.pad(2)).toEqual([null,null]);
    });

    it("can pad with a string", function() {
      expect(emptyArray.pad(2,'apple')).toEqual['apple','apple'];
    });

    it("can pad with an object", function() {
      expect(emptyArray.pad(2, {})).toEqual([{}, {}]);
    });
  });
});
