import search from '../src/index.js';

describe('Поиск', () => { //eslint-disable-line
  const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
  const doc2 = { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." };
  const doc3 = { id: 'doc3', text: "I'm your shooter." };
  const docs = [doc1, doc2, doc3];

  // test('шаг 1, Поиск по слову', () => { //eslint-disable-line
  //   const result = search(docs, 'shoot');
  //
  //   expect(result).toEqual([doc1.id, doc2.id]); //eslint-disable-line
  // });

  test('шаг 2, Обработка текста', () => { //eslint-disable-line
    const result = search(docs, 'pint');
    const result2 = search(docs, 'pint!');

    expect(result).toEqual([doc1.id]); //eslint-disable-line
    expect(result2).toEqual([doc1.id]); //eslint-disable-line
  });

  test('шаг 3, Релевантность', () => { //eslint-disable-line
    const result = search(docs, 'shoot');

    expect(result).toEqual([doc2.id, doc1.id]); //eslint-disable-line
  });
});
