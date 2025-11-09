var triangleBase = parseInt(prompt("What is the Triangle's Base value?"), 10);

var triangleHeight = parseInt(
    prompt("What is the Triangle's Height value?"),
    10
);

const triangleArea = (triangleBase * triangleHeight) / 2;

console.log("The Area of the Triangle is " + triangleArea);

// The First Line Collects the Base value of the triangle from a prompt and converts it to an integer of base 10.
// The Second Line Collects the Height value of the triangle from a prompt and converts it to an integer of base 10.
// The Third Line Multiples the values of the Base and the Height, then divides it over 2 to get the area of the triangle.
// The Forth Line Displays the result to the console.