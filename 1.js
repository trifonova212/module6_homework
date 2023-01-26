let arr = [1, 2, 3, 'something', null, true];
let even = 0;
let odd = 0;
let other = 0;

function countElements() {	
  for (let i = 0; i < arr.length; i++){
    if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
    other++;
    } else {
    if (arr[i] % 2 === 0) {
    even++;
    } else {
    odd++;
    }
    }
  }
  console.log("Even is " + even, "Odd is " + odd, "Other is " + other);
}

countElements();

