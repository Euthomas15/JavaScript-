// Task 1: Basic Types
// Declare variables with their correct data types
let studentName: string = "Tunde";
let studentAge: number = 21;
let isEnrolled: boolean = true;

// Correct the courseName type
let courseName: string = "Frontend Development";

// GPA is a number because it contains a numeric value
let gpa: number = 4.75;

console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("Is Enrolled:", isEnrolled);
console.log("Course Name:", courseName);
console.log("GPA:", gpa);

// The original code used number, but "Frontend Development"
// is a string, so the correct type is string.




// Task 2: Typed Functions
// Function that adds two numbers and returns a number
function addNumbers(a: number, b: number): number {
  return a + b;
}

// Function that checks whether a person is an adult
function isAdult(age: number): boolean {
  return age >= 18;
}

// Function that calculates the area of a rectangle
function getArea(width: number, height: number): number {
  return width * height;
}

console.log("Sum:", addNumbers(10, 5));
console.log("Is Adult:", isAdult(21));
console.log("Rectangle Area:", getArea(8, 5));


// Task 3: Interfaces
// Define the structure that every Student object must follow
interface Student {
  id: number;
  name: string;
  age: number;
  course: string;
  isActive: boolean;
}

// Create two Student objects
const student1: Student = {
  id: 1,
  name: "Tunde",
  age: 21,
  course: "Frontend Development",
  isActive: true
};

const student2: Student = {
  id: 2,
  name: "Amaka",
  age: 22,
  course: "Software Development",
  isActive: true
};

// Define the structure of an Instructor object
interface Instructor {
  name: string;
  cohort: number;
  subjects: string[];
}

// Accept an Instructor object and return an introduction
function introduceInstructor(instructor: Instructor): string {
  return `${instructor.name} teaches Cohort ${instructor.cohort} and covers: ${instructor.subjects.join(", ")}`;
}

// Display the student details
console.log("Student 1:", student1);
console.log("Student 2:", student2);

// Create an instructor and display the introduction
const instructor1: Instructor = {
  name: "Stanley",
  cohort: 8,
  subjects: ["HTML", "CSS", "JavaScript"]
};

console.log(introduceInstructor(instructor1));


// Task 4: Arrays and Union Types
// Declare an array containing strings
let names: string[] = ["Ada", "Bola", "Chidi"];

// Declare an array containing numbers
let scores: number[] = [78, 90, 55, 88];

// Accept either a string or a number and always return a string
function formatId(id: string | number): string {
  return String(id);
}

console.log("Names:", names);
console.log("Scores:", scores);

console.log("Formatted Number ID:", formatId(42));
console.log("Formatted String ID:", formatId("abc"));