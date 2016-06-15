require('./spec_helper.js');
include('longest_string.js');

describe("longestString", function() {
  it("returns null when the array is empty ([])", function() {
    expect(longestString([])).toEqual(null);
  });

  it("returns '' when that is the only element in the array", function() {
    expect(longestString([''])).toEqual('');
  });

  it("returns 'cat' when that is the only element in the array", function() {
    expect(longestString(['cat'])).toEqual('cat');
  });

  it("returns the 'zzzzzzz' with the example array", function() {
    expect(longestString(['cat', 'zzzzzzz', 'apples'])).toEqual('zzzzzzz');
  });

  it("returns the longest string in an array of strings", function() {
    var array = [];

    for(var i=0; i < 10; i++) {
      var string = 'a';
      for(var n=0; n < i; n++) {
        string += 'a'
      }
      array.push(string);
    }

    expect(longestString(array)).toEqual('aaaaaaaaaa');
  });
});

