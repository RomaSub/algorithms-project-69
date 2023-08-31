const search = (arraydocs, searchstring) => {
  const term = searchstring.match(/\w+/g);
  const result = [];

  arraydocs.forEach(({ id, text }) => {
    const matches = text.match(/\w+/g).filter((word) => term.includes(word));
    const numberOfSearchWords = new Set(matches).size;
    if (matches.length) {
      result.push({ id, relevance: matches.length, numberOfSearchWords });
    }
  });

  result.sort((a, b) => {
    if (b.numberOfSearchWords !== a.numberOfSearchWords) {
      return b.numberOfSearchWords - a.numberOfSearchWords;
    }
    return b.relevance - a.relevance;
  });

  return result.map(({ id }) => id);
};
export default search;
