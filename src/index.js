const search = (arrayDocs, searchString) => {
  console.log(arrayDocs);
  const result = arrayDocs.reduce((acc, { id, text }) => {
    const trueText = text.split(' ');
    if (trueText.includes(searchString)) {
      acc.push(id);
    }
    return acc;
  }, []);
  return result;
};
export default search;
