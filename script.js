console.log("Hey");

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
    `The longest possible distance between the two frogs is ${frogA + frogB}`
  );
}

solution([2, 6, 8, 5], 0);
