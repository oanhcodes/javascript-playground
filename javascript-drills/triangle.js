function validTriangle(a, b, c) {
  if (a === b && b === c) {
    return true;
  } else if (a === 0 || b === 0 || c === 0) {
    return false;
  } else if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)); {
    return true;
  }
}

