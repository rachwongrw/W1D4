var words = ["ground", "control", "to", "major", "tom"];

function myMap(list,cb) {
  var newArray = [];
  for (var i = 0; i < list.length; i++) {
    var result = cb(list[i]);
    newArray.push(result);
  }
  console.log(newArray);
}


myMap(words, function(word) {
  return word.length;
});

// myMap(words, function(word) {
//   return word.toUpperCase();
// });

// myMap(words, function(word) {
//   return word.split('').reverse().join('');
// });




/* Expected output:

[6, 7, 2, 5, 3]

[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]


can't use map function. create your own

1. create a loop to go through each element in the array
2. pass it through the callback function
3. build an array from the return value of the callback function
*/