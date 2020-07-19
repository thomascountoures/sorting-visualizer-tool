export const mergeSort = (array: number[]) => {
  if (array.length === 1) return array;
  const middleIdx = Math.floor(array.length / 2);
  const leftHalfSorted = mergeSort(array.slice(0, middleIdx));
  const rightHalfSorted = mergeSort(array.slice(middleIdx));
  let finalSortedResult: number[] = [];
  let i = 0,
    j = 0;
  while (i < leftHalfSorted.length && j < rightHalfSorted.length) {
    if (leftHalfSorted[i] < rightHalfSorted[j]) {
      finalSortedResult.push(leftHalfSorted[i++]);
    } else {
      finalSortedResult.push(rightHalfSorted[j++]);
    }
  }
  while (i < leftHalfSorted.length) {
    finalSortedResult.push(leftHalfSorted[i++]);
  }
  while (j < rightHalfSorted.length) {
    finalSortedResult.push(rightHalfSorted[j++]);
  }

  return finalSortedResult;
};

export const bubbleSort = (array: number[]) => {
  let currentIndex = 0;
  let sortingOccurring = true;
  let sorted = false;

  while (sortingOccurring) {
    let currValue = array[currentIndex];
    let nextValue = array[currentIndex + 1];

    console.log(`current value is ${currValue}`);
    console.log(`next value is ${nextValue}`);

    // console.log('--------------------------------------');

    if (currValue > nextValue) {
      console.log('swapping values...');
      // swap values
      array.splice(currentIndex, 1, nextValue);
      array.splice(currentIndex + 1, 1, currValue);

      //console.log(`what is sorted? ${sorted}`);
      // don't keep setting sorted to true if it's already true
      if (!sorted) {
        sorted = true;
        console.log('sorted becomes true');
      }
    }

    // if this is the last iteration in this run
    if (currentIndex + 1 === array.length - 1) {
      console.log(
        `last iteration in this loop... sorted was ${sorted} -------------`
      );
      currentIndex = 0;
      if (!sorted) {
        sortingOccurring = false;
        console.log('done');
        return array;
      } else {
        // if a sort did occur during this pass, reset for the next run
        sorted = false;
      }
    } else {
      // not the last iteration in this run, keep going
      currentIndex += 1;
    }
  }
};
