// Para rodar esse teste rodar o comando: npm test 
// npm test -- --coverage, para gerar o relatório de cobertura de testes

const sum = require('./sum');

describe('Sum function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds 15 + 15 to equal 30', () => {
    expect(sum(15, 15)).toBe(30);
  });
});