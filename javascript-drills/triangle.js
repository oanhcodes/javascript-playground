// Triangle is valid if no sides have a length equal to 0
// Triangle is valid if all sides are equal length
// Triangle is valid is square of a + square of b = sqauare of c

function validTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return false;
  } else if (a === b && b === c) {
    return true;
  } else if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)); {
    return true;
  }
}
