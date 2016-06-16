var rectOne   = {width: 10, height: 20};
var rectTwo   = {width: 32, height: 13};
var rectThree = {width: 20, height: 10};

var equal = function(rect1, rect2) {
  return ( (rect1.width  == rect2.width && rect1.height == rect2.height ) ||
           (rect1.height == rect2.width && rect1.width  == rect2.height ) );
};

var area = function(rectangle) {
  return (rectangle.width * rectangle.height);
};

var perimeter = function(rectangle) {
  return ((rectangle.width + rectangle.height) * 2);
};

var diagonal = function(rectangle) {
  return (Math.sqrt(Math.pow(rectangle.width, 2) + Math.pow(rectangle.height, 2)));
};

function isSquare(rectangle) {
  if (rectangle.width === rectangle.height) {
    return true;
  } else {
    return false;
  }
};