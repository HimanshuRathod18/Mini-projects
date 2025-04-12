// greet function
function greet(firstName: string) {
  console.log("Hello " + firstName);
}

greet("Kashifa");

// sum function
function sum(a: number, b: number): number {
  // type inference: tsc knows if a and b are numbers and we add it will return the type of the function as number
  return a + b;
}

const value = sum(2, 5);
console.log(value);

// isLegal
function isLegal(age: number): boolean {
  if (age > 18) return true;
  else return false;
}

// function that takes another function as input
function runAfter1S(fn: () => void) {
  setTimeout(fn, 1000);
}
runAfter1S(function () {
  console.log("Hello there!");
});
