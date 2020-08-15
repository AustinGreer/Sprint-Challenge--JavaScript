// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

/* Explanation: `nestedFunction() is able to access `internal` because a function can access variables 
outside of its scope. The function is able to see that it does not have `internal`, it looks into the function 
it's nested in to see if it has the variable. Since that function does, it can log it.


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that 
number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(randomNum) {
  return randomNum * (randomNum + 1) / 2;
}

console.log(summation(6));
