// Para rodar esse teste rodar o comando: npm test 
// npm test -- --coverage, para gerar o relatório de cobertura de testes

const sum = require('./sum');
const sub = require('./sub');

describe('Sum function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds 15 + 15 to equal 30', () => {
    expect(sum(15, 15)).toBe(30);
  });
});

describe('Sub function', () => {
  test('subtracts 2 from 5 to equal 3', () => {
    expect(sub(5, 2)).toBe(3);
  });

  test('subtracts 2 from 5 to equal 3', () => {
    expect(sub(5, 2)).toBe(3);
  });

  test('subtracts 10 from 25 to equal 15', () => {
    expect(sub(25, 10)).toBe(15);
  });
});