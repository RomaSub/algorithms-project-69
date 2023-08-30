const search = (ArrayDocs, searchString) => {
  console.log(ArrayDocs);
  const result = ArrayDocs.reduce((acc, { id, text }) => {
    const trueText = text.split(' ');
    if (trueText.includes(searchString)) {
      acc.push(id);
    }
    return acc;
  }, []);
  return result;
};
export default search;
