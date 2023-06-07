// On window load function will run
window.onload = function () {
//   create a for loop to show 1 to 100 number
  for (var i = 1; i <= 100; i++) {
    //       if number is multiples of 4 and 3 show fizzBuzz
    if (i % 4 === 0 && i % 3 === 0) {
      console.log("FizzBuzz");
    } else if (i % 4 === 0) {
      //       if number is multiples of 4 show Fizz
      console.log("Fizz");
    } else if (i % 3 === 0) {
      //       if number is multiples of 3 show Buzz
      console.log("Buzz");
    } else {
//       If number is not multiple of 3 or 4 shows number
      console.log(i);
    }
  }
};
