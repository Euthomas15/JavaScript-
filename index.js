// 1. Square a number
const square = (n) => n * n;

// 2. Greet someone
const greet = (name) => "Hello, " + name + "!";

// 3. Multiply two numbers
const multiply = (a, b) => a * b;

// 4. Return a person's full name
const getFullName = (firstName, lastName) =>
  firstName + " " + lastName;



console.log(square(5));
console.log(greet("Etiusen"));
console.log(multiply(4, 3));
console.log(getFullName("Ada", "Okafor"));




// 2. Destructuring

const student = {
  name: "Amaka",
  age: 22,
  course: "Frontend Development",
  city: "Abuja"
};

const scores = [88, 72, 95, 60, 45];

// Destructure name and course
const { name, course } = student;

console.log(name);
console.log(course);

// Destructure age and rename it
const { age: studentAge } = student;

console.log(studentAge);

// Destructure the first and second array values
const [firstScore, secondScore] = scores;

console.log(firstScore);
console.log(secondScore);



// 3. Spread Operator

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express", "MongoDB"];

// I Combine both arrays without modifying the originals
const fullStack = [...frontend, ...backend];

console.log("Full Stack:", fullStack);
console.log("Original Frontend:", frontend);
console.log("Original Backend:", backend);

const userProfile = {
  username: "coder_ade",
  email: "ade@example.com"
};

// I Created a new object with an updated email
const updatedProfile = {
  ...userProfile,
  email: "newemail@example.com"   // This line updates the email property you also explained that the order matters, so the new email will overwrite the old one
};

// Prove the original object remains unchanged
console.log("Original Profile:", userProfile);
console.log("Updated Profile:", updatedProfile);




// 4. Template Literals

const firstName = "Fatima"; // I Declare a variable for the name which show me an error because I already declared a variable with the same name in the destructuring section. To fix this, I can rename the variable to avoid conflicts.
const age = 24;

// Rewrite the introduction using a template literal
const intro = `My name is ${firstName} and I am ${age} years old.`;

console.log(intro);

// Calculate the area of a rectangle
const width = 8;
const height = 5;

const area = width * height;

const rectangleMessage = `The area of the rectangle is ${area}`;

console.log(rectangleMessage);



// 5. Array Methods

const products = [
  { name: "Laptop", price: 450000, inStock: true },
  { name: "Mouse", price: 8000, inStock: true },
  { name: "Monitor", price: 120000, inStock: false },
  { name: "Keyboard", price: 15000, inStock: true }
];

// Get an array containing only product names
const productNames = products.map((product) => product.name);

console.log("Product Names:", productNames);

// Get only products that are in stock
const inStockProducts = products.filter((product) => product.inStock);

console.log("In-Stock Products:", inStockProducts);

// Get uppercase names of only in-stock products
const availableProductNames = products
  .filter((product) => product.inStock)
  .map((product) => product.name.toUpperCase());

console.log("Available Product Names:", availableProductNames);



// 6. Ternary & Logical &&

const role = "editor";
const cartItems = 0;

// This Code block determines access level using nested ternary operators
const accessLevel =
  role === "admin"
    ? "Full Access"
    : role === "editor"
      ? "Edit Access"
      : role === "viewer"
        ? "Read Only"
        : "No Access";

console.log("Access Level:", accessLevel);

// Test logical AND
console.log(cartItems && "View Cart");

// Because cartItems is 0, which is falsy,
// the expression returns 0 instead of "View Cart".

// Fix: show "View Cart" only when items exist
console.log(cartItems > 0 && "View Cart");