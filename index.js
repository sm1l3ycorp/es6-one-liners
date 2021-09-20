//calculating the sum of the numbers
const sum = (nos) => nos.reduce((a, b) => a + b, 0);
console.log(sum([8, 34, 6, 29, 2, 1]));

//calculate average
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const avg = (array) => array.reduce((a, b) => a + b) / array.length;
console.log(avg(arr));

//max number
const maxNum = (nos) => Math.max(...nos);
console.log(maxNum([5, 10, 15, 20, 25, 30, 35]));

//min number
const minNum = (nos) => Math.min(...nos);
console.log(minNum([5, 10, 15, 20, 25, 30, 35]));

//reversing a string
const strReverse = (str) => str.split("").reverse().join("");
console.log(strReverse("This is a reversed string"));

//calculating a random number from a range of numbers
const a = Math.floor(Math.random() * (45 - 35 + 1)) + 35;
console.log(a);

//converting a string to an array
const str = "This is a string".split(" ");
console.log(str);

// forEach example
const letters = ["X", "Y", "Z"];
letters.forEach((e) => {
  console.log(e);
});

//multiple re-assignment
const [w, x, y, z] = [30, 84, 28, "Axel"];
console.log(w, x, y, z);

//sort words from shortest to longest
const sortByLength = (arr) => arr.sort((a, b) => a.length - b.length);
console.log(sortByLength(["Epic", "1337", "Winning", "Almonds", "Raspberry"]));

//program to check for a if a number is even or odd
const isEvenOdd = (num) => num % 2 === 0;
console.log(isEvenOdd(3));

//program to check for palindrome
const isPalindrome = (str) => str === str.split("").reverse().join("");
console.log(isPalindrome("civic"));

// Unique Arrays:
[...new Set(array)];

// Removing duplicates from an array
// One-liner
const removeDuplicates = (arr) => [...new Set(arr)];

// remove falsey values from arrays, like null and undefined
array.filter(Boolean);

// Sleep an async function for a second
await new Promise((r) => setTimeout(r, 1000));

// Map-Filter-Reduce
// For this example, we have a simple array: [1, 2, 3]. We want to:

// Multiply by 2 each number in this array (map)
// Keep the resulting numbers that are lower than 5 (filter)
// Add up the remaining numbers (reduce)
[1, 2, 3]
  .map((v) => v * 2)
  .filter((v) => v < 5)
  .reduce((a, v) => a + v); // 6

// Checking if all elements of an array are in another one
// One-liner
const similarArrays = (arr1, arr2) =>
  arr1.every((v1) => arr2.some((v2) => v1 === v2));
// How to use it
console.log(similarArrays(["foo", 3], [3, false, {}, "foo"])); // true
console.log(similarArrays(["foo", 3], [1337, "bar", 3, "qux"])); // false
// Beware: objects are compared by reference...

// map over an array of objects and return keys
const coordinates = [
  {
    name: "coordinate_1",
    x: 12,
    y: 123,
  },
  {
    name: "coordinate_2",
    x: 134,
    y: 52,
  },
  {
    name: "coordinate_3",
    x: 34,
    y: 52,
  },
];

const coordinate_names = coordinates.map((coordinate) => {
  return coordinate.name;
});
console.log(coordinate_names);

// filter out invalid id of users in a array
const jsonarr = [
  {
    id: 1,
    name: "joe",
  },
  {
    id: -19,
    name: "john",
  },
  {
    id: 20,
    name: "james",
  },
  {
    id: 25,
    name: "jack",
  },
  {
    id: -10,
    name: "joseph",
  },
  {
    id: "not a number",
    name: "jimmy",
  },
  {
    id: null,
    name: "jeff",
  },
];

const result = jsonarr.filter((user) => user.id > 0);

console.log(result);

// map and filter example
const devs = [
  {
    name: "A",
    age: 26,
    tech: ["JavaScript", "React"],
  },
  {
    name: "B",
    age: 25,
    tech: ["Node", "AngularJs"],
  },
  {
    name: "C",
    age: 27,
    tech: ["Java", "AWS"],
  },
];

const devReact = devs
  .filter((obj) => obj.tech.includes("React"))
  .map((obj) => ({ name: obj.name, tech: obj.tech }));
console.log(devReact);

//array .includes() example
const marks = [50, 60, 70, 80];
//check if 50 is included in array
if (marks.includes(50)) {
  console.log("found element in array");
} else {
  console.log("could not find element");
}

// .some() example
const operatives = [
  { id: 12, name: "King Arthur", pilot: false },
  { id: 44, name: "George Jetson", pilot: true },
  { id: 59, name: "Bill Gates", pilot: false },
  { id: 122, name: "Kevin Micknik", pilot: true },
];

//   if some of your array values correspond to what you’re looking for, .some() will return true. If not, it’ll return false.
const listHasPilots = operatives.some((operative) => operative.pilot);

// .find() example
// .find() will return the first value that corresponds to the passed condition
const firstPilot = operatives.find((operative) => operative.pilot);

// .filter(), .map(), and .reduce() chaining

const data = [
  {
    name: "Butters",
    age: 3,
    type: "dog",
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog",
  },
  {
    name: "Red",
    age: 1,
    type: "cat",
  },
  {
    name: "Joey",
    age: 3,
    type: "dog",
  },
];

const isDog = (animal) => {
  return animal.type === "dog";
};

const dogYears = (animal) => {
  return animal.age * 7;
};

const sum = (sum, animal) => {
  return sum + animal;
};

const ages = data.filter(isDog).map(dogYears).reduce(sum);
// ages = 84

// filter out even numbers in array, return odd numbers
const arr = [1,2,3,4,5,6,7,8,9,10,11,12]

const odds = arr.filter(n => n%2)

console.log(odds)

// filter an array based on values in another array
arr1.filter(e => arr2.includes(e))

// sum similar keys in an array of objects
const arr = [ { 'name': 'P1', 'value': 150 }, { 'name': 'P1', 'value': 150 }, { 'name': 'P2', 'value': 200 }, { 'name': 'P3', 'value': 450 } ];

const res = Array.from(arr.reduce(
  (m, {name, value}) => m.set(name, (m.get(name) || 0) + value), new Map
), ([name, value]) => ({name, value}));
console.log(res);
