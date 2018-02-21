var namesArray = ['matt', 'kim', 'kyle', 'dan', 'james']
var numsArray = [5, 12, 54, 13, 92]

var arrayOfArrays = [[1, 2, 3], ["a", "b", "c"], ["i", "ii", "iii"]]


// Remove 'james' from the back of the namesArray and store it in a variable
namesArray.pop();
// Add your name to the back of the namesArray
namesArray.push("Sean");
console.log(namesArray)

// Remove the first number from the front of the numsArray
numsArray.shift()

// Add your favorite number to the front of the numsArray
numsArray.unshift(7)
console.log(numsArray)

// Write a function that takes a name as an arument (string), and searches the names array and logs the index
function searchNameArr(name){
//interate thru names Array
  for (let i = 0; i < namesArray.length; i++) {
    var currentName = namesArray[i]
      if (name === currentName){
              console.log(i)
      }
  }
}
  serachNameArr('dude')

// Console.log each value from the arrayOfArrays individually (nested for loops)
