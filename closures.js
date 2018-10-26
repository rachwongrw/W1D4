function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var i = 0 - 1;
  return function() {
    i += 1;
    return list[i];
  };
}

var rollLoadedDie = makeLoadedDie();

console.log("Make Loaded Die");

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6




var countdownGenerator = function (x) {
  var i = x;
  return function (){
    if (i > 0)  {
      console.log("T-minus " + i + "...");
    } else if (i === 0) {
      console.log("Blast Off!");
    } else if (i < 0) {
      console.log("Rockets already gone, bub!");
    }
    i -= 1;
    return i;
  };
};

var countdown = countdownGenerator(3);

console.log(" ");
console.log("Countdown Generator");

countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!

