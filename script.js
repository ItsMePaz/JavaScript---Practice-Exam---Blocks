console.log("Hey");

const show = document.getElementById("show");
const hide = document.getElementById("hide");
const example = document.getElementById("example");

const arrayBlockInput = document.getElementById("arrayBlock");
const displayInput = document.getElementById("displayInput");
const submit = document.getElementById("submit");

const startingBlockInput = document.getElementById("startingBlock");
const displayStaringIndexInput = document.getElementById("startingIndexInput");
const submitIndex = document.getElementById("submitIndex");

const longestDistanceApart = document.getElementById("longestDistance");
let blocks = [];
let indexStart = "";

show.addEventListener("click", showExamples);

function showExamples() {
  example.style.display = "";
}

hide.addEventListener("click", hideExamples);

function hideExamples() {
  example.style.display = "none";
}

function submitInput(e) {
  e.preventDefault();
  /* displayInput.innerText = `[${arrayBlockInput.value}]`; */

  blocks.push(parseInt(arrayBlockInput.value));
  console.log(blocks);
  displayInput.innerText = `[${blocks}]`;
}

function submitIndexInput(e) {
  e.preventDefault();
  /* displayInput.innerText = `[${arrayBlockInput.value}]`; */
  let indexStart = parseInt(startingBlockInput.value);
  displayStaringIndexInput.innerText = `Frogs will be initially placed in Block Index [${indexStart}]`;
  console.log(indexStart);
  console.log(blocks);
  solution(blocks, indexStart);
}
submit.addEventListener("click", submitInput);
submitIndex.addEventListener("click", submitIndexInput);
console.log(blocks);

//Solution function
function solution(blocks, startingBlock) {
  let frogA = 1;
  let frogB = 0;

  let frogAArray = blocks.slice(startingBlock);
  console.log(frogAArray);
  let frogArraySliced = blocks.reverse();

  let frogBArray = frogArraySliced.slice(startingBlock - 2);

  console.log(frogBArray);
  while (frogAArray.length > 0) {
    if (frogAArray[0] <= frogAArray[1]) {
      ++frogA;

      frogAArray.shift();
    } else {
      frogAArray.length = 0;
    }
  }

  while (frogBArray.length > 0) {
    if (frogBArray[0] <= frogBArray[1]) {
      ++frogB;

      frogBArray.shift();
    } else {
      frogBArray.length = 0;
    }
  }
  console.log(
    `The longest possible distance between the two frogs is ${
      frogA + frogB
    } blocks`
  );
  longestDistanceApart.innerText = `The frogs have jumped away from each other starting from block ${indexStart}! The longest possible distance between the two frogs after the jump is ${
    frogA + frogB
  } blocks`;
}
