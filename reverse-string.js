function reverseString(str) {
  const arrayOfWords = str.split(" ");
  const finalArray = arrayOfWords.map((word) => {
    //reverse the words
    let wordArray = word.split("");
    let letterPointerLeft = 0;
    let letterPointerRight = wordArray.length - 1;
    while (letterPointerLeft < letterPointerRight) {
      [wordArray[letterPointerLeft], wordArray[letterPointerRight]] = [
        wordArray[letterPointerRight],
        wordArray[letterPointerLeft],
      ];
      letterPointerLeft++;
      letterPointerRight--;
    }
    word = wordArray.join("")
    return word
  });

  //reverse the sentence
  let wordPointerLeft = 0;
  let wordPointerRight = finalArray.length - 1;
  while (wordPointerLeft < wordPointerRight) {
    [finalArray[wordPointerLeft], finalArray[wordPointerRight]] = [
      finalArray[wordPointerRight],
      finalArray[wordPointerLeft],
    ];
    wordPointerLeft++;
    wordPointerRight--;
  }
  const res = finalArray.join(" ");
  return res;
}

const reverseString2 = str => [...str].reverse().join("")

console.log(reverseString("Easy stuff"));



console.log(reverseString2("Easy stuff"))


