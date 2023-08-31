const search = (arrayDocs, searchString) => {
  const term = searchString.match(/\w+/g)[0];
  const result = arrayDocs
    .filter(({ text }) => text.match(/\w+/g).includes(term))
    .map(({ id }) => id);
  return result;
};
export default search;
