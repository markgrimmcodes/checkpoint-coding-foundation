function filterApiData(apiData, mandatoryKeys) {
  let filteredData = [];

  for (let data of apiData) {
    let containsKeys = true;

    for (let keys of mandatoryKeys) {
      let comparison = Object.keys(data);
      if (comparison.includes(keys) === false) {
        containsKeys = false;
      }
    }
    if (containsKeys == true) {
      filteredData.push(data);
    }
  }
  return filteredData;
}
