const search = (arraydocs) => {
  const index = arraydocs.reduce((acc, { id, text }) => {
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

  return index;
};
export default search;
