function findWaldo(arr, found) {
  var findIndex = arr.indexOf("Waldo");
  arr.forEach(function(arr) {
    if (arr === "Waldo") {
      found(findIndex);
    }
  });
}


function actionWhenFound(found) {
  console.log("Found Waldo at index", found + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



/* Original code without the forEach function

function findWaldo(arr, found) {
  var findIndex = arr.indexOf("Waldo");

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(findIndex);
    }
  }
}

function actionWhenFound(found) {
  console.log("Found Waldo at index", found + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);




*/