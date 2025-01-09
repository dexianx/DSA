// Given an array  = [2, 5, 1 , 2, 3, 5, 1, 2, 4]
//it should return 2 the first duplicate

//Given an array [2, 3, 4, 5], return undefined

const returnFirstDuplicate = (array) => {
  const hashSet = new Set();
  for (const element of array) {
    if (hashSet.has(element)) {
      return element;
    }
    hashSet.add(element);
  }
  return undefined;
};

console.log(returnFirstDuplicate([2, 3, 4, 5]));
