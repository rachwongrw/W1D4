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