// #Title: MBTA Homework

// ## Objectives:
// - Practice with with functions, arrays, and properties of an object literal.

// ## Activity:

// - Create a function to caclulate the number of stop between stations on the "MBTA". Right sub-functions as needed.
// - The function takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and **returns the total number of stops for the trip**.
// - There are 3 subway lines:
//  - The Red line has the following stops:
var redLine = ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'];

//  - The Green line has the following stops:
var greenLine = ['haymarket', 'government center', 'park st', 'bolyston', 'arlington', 'copley'];
//  - The Orange line has the following stops:
var orangeLine = ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills'];

var mbta = {
  'red line': redLine,
  'green line': greenLine,
  'orange line': orangeLine
};
//  - All 3 subway lines intersect at *park st*, but there are no other intersection points. Some of this MBTA is fictionalized. haymarket does not connect the orange/green lines.

// ### Hints:

// * Assume good input.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * Subway lines are properties in an object literal, while the values are an array of all the stops on each line.

var stopsInLine = function(line, getOnStop, getOffStop) {
  return Math.abs(line.indexOf(getOnStop) - line.indexOf(getOffStop));
};

var stopsCount = function(getOnLine, getOnStop, getOffLine, getOffStop) {
  var result =0;

  if (getOnLine.indexOf(getOnStop) === -1 || getOffLine.indexOf(getOffStop) === -1) {
    result = 'incorrect input';
  }
  else if (getOnLine === getOffLine) {
    result = stopsInLine(getOnLine, getOnStop, getOffStop);
  }
  else {
    result = stopsInLine(getOnLine, getOnStop, 'park st') +
      stopsInLine(getOffLine, getOffStop, 'park st');
  }

  return result;
};

// console.log(stopsCount(mbta['red line'], 'south station', mbta['orange line'], 'chinatown'));
// console.log(stopsCount(mbta['red line'], 'kendall', mbta['red line'], 'south station'));
// console.log(stopsCount(mbta['green line'], 'bolyston', mbta['red line'], 'harvard'));
// console.log(stopsCount(mbta['green line'], 'bolyston', mbta['orange line'], 'heymarket'));
