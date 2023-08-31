const search = (arrayDocs, searchString) => {
  const term = searchString.match(/\w+/g)[0];
  const result = [];
  arrayDocs.forEach(({ id, text }) => {
    const matches = text.match(/\w+/g).filter((word) => word === term);
    if (matches.length) {
      result.push({ id, relevance: matches.length });
    }
  });

  result.sort((a, b) => b.relevance - a.relevance);
  console.log(result);
  return result.map(({ id }) => id);
};
export default search;
