function zipStrings(strA, strB) {
  let mergedArr = [];
  const arrStrA = strA.split("");
  const arrStrB = strB.split("");

  for (let el of arrStrA) {
    mergedArr.push(el);
    for (let ol of arrStrB) {
      mergedArr.push(ol);
    }
  }
  return mergedArr.join();
}
