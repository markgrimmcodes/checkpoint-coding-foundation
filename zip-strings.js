function zipStrings(strA, strB) {
  let mergedArr = [];
  let arrStrA = strA.split("");
  let arrStrB = strB.split("");

  for (let i = 0; i < arrStrA.length || i < arrStrB.length; i++) {
    mergedArr.push(arrStrA[i]);
    mergedArr.push(arrStrB[i]);
  }
  return mergedArr.join("");
}
