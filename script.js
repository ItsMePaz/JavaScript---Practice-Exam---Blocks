console.log("Hey");
let blocks = [2, 6, 8, 2];

let frogA = 1;
let frogB = 1;

while (blocks.length > 0) {
  if (blocks[0] <= blocks[1]) {
    ++frogA;
    console.log("can jump");
    blocks.shift();
  } else {
    blocks.length = 0;
    frogA - 1;
  }
}

console.log(frogA);

let random = [2, 6, 8, 2];
console.log(random);
let newArray = random.splice(2);
console.log(newArray);
