const search = (arrayDocs) => {
  const index = arrayDocs.reduce((acc, { id, text }) => {
    const keys = text.match(/\w+/g);
    keys.forEach((word) => {
      if (acc[word]) {
        acc[word].push(id);
      } else {
        acc[word] = [id];
      }
    });
    return acc;
  }, {});

  const documentCount = arrayDocs.length;
  const idf = {};
  Object.keys(index).forEach((word) => {
    const documentFrequency = index[word].length;
    idf[word] = Math.log(documentCount / (1 + documentFrequency));
  });

  const tfIdfIndex = {};
  arrayDocs.forEach(({ id, text }) => {
    const keys = text.match(/\w+/g);
    const wordFrequency = {};
    keys.forEach((word) => {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });

    Object.keys(wordFrequency).forEach((word) => {
      const tf = wordFrequency[word] / keys.length;
      const tfIdf = tf * idf[word];
      if (tfIdfIndex[word]) {
        tfIdfIndex[word][id] = tfIdf;
      } else {
        tfIdfIndex[word] = { [id]: tfIdf };
      }
    });
  });

  console.log(tfIdfIndex);
  return tfIdfIndex;
};

export default search;
