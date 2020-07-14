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
    } else if (rightHalfSorted[j] < leftHalfSorted[i]) {
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
