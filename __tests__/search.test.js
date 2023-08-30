import { describe, expect, test } from '@jest/globals';
import search from '../src/index.js';

describe('Поиск', () => {
  const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
  const doc2 = { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." };
  const doc3 = { id: 'doc3', text: "I'm your shooter." };
  const docs = [doc1, doc2, doc3];

  test('шаг 1, поиск оп слову', () => {
    const result = search(docs, 'shoot');

    expect(result).toEqual([doc2.id, doc1.id]);
  });
});