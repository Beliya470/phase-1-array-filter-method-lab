function findMatching(drivers, query) {
  return drivers.filter((driver) =>
    driver.toLowerCase() === query.toLowerCase()
  );
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter((driver) =>
    driver.toLowerCase().startsWith(letters.toLowerCase())
  );
}

function matchName(drivers, name) {
  return drivers.filter((driver) => driver.name === name);
}

// Test data
const drivers = [
  "John",
  "Mike",
  "Sarah",
  "Alice",
  "Matt",
  "Emily",
  "Daniel",
  "Emma",
];

console.log("findMatching:", findMatching(drivers, "John")); // should return ["John"]
console.log("fuzzyMatch:", fuzzyMatch(drivers, "Mi")); // should return ["Mike", "Mike"]
console.log(
  "matchName:",
  matchName(
    [
      { name: "John", hometown: "New York" },
      { name: "Mike", hometown: "Chicago" },
      { name: "Sarah", hometown: "Los Angeles" },
    ],
    "John"
  )
); // should return [{ name: "John", hometown: "New York" }]
