const mergeArrays = (array1, array2) => {
  let i = 0;
  let j = 0;
  let k = 0;
  let finalArray = [];
  while (i < array1.length && j < array2.length) {
    if (array1[i] <= array2[j]) {
      finalArray[k] = array1[i];
      i++;
    } else {
      finalArray[k] = array2[j];
      j++;
    }
    k++;
  }
  while (i < array1.length) {
    finalArray[k] = array1[i];
    i++;
    k++;
  }
  while (j < array2.length) {
    finalArray[k] = array2[j];
    j++;
    k++;
  }
  return finalArray;
};

console.log(mergeArrays([0, 3, 4, 31], [4, 6, 30]));
