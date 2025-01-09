const checkForDuplicates = (array1, array2) => {
  let hashSet = new Set();
  array1.forEach((item) => {
    hashSet.add(item);
  });
  for (let item of array2) {
    if (hashSet.has(item)) {
      return true;
    }
  }
  return false;
};

console.log(checkForDuplicates(["a", "c", "d", "f"], ["x", "a", "y"]));
