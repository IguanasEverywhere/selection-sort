function selectionSort(arr) {
  // type your code here

  // have a sortedArr = []
  // iterate over arr
    // find min element
    // push that min element to sortedArr
    // splice that element out of arr
  //return sortedArr

  let sortedArr = [];

  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let smallest = Math.min(...arr);
    let idx = arr.indexOf(smallest);
    sortedArr.push(Math.min(...arr));
    arr.splice(idx, 1);
  }

  return sortedArr

}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [1, 3, 5, 5, 10]");
  console.log("=>", selectionSort([5, 3, 1, 5, 10]));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", selectionSort([]));

  console.log("");

  console.log("Expecting: [5, 5, 5]");
  console.log("=>", selectionSort([5, 5, 5]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  const shortInput = [3, 1, 2];

  let startTime = Date.now();

  for (let j = 0; j < 1000; j++) {
    selectionSort(shortInput);
    selectionSort(longInput);
  }

  let averageRuntime = (Date.now() - startTime) / 2000;

  console.log(averageRuntime)
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
