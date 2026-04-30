// Create an array with six bunny names
let bunnies = ["Lucy", "Bella", "Daisy", "Coco", "Lola", "Milo"];

// Add Mario to the end of the array
bunnies.push("Mario");

// Remove Lucy from the array
bunnies.splice(bunnies.indexOf("Lucy"), 1);

// Add Luigi to the beginning of the array
bunnies.unshift("Luigi");

console.log(bunnies);