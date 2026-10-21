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