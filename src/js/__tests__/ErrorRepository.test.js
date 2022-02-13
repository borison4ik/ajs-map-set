import ErrorRepository from '../components/ErrorRepository';

describe('ErrorRepository class: ', () => {
  const customErrors = new ErrorRepository();
  const cases = [
    [100, 'Ошибка номер 100'],
    [200, 'Ошибка номер 200'],
    [300, 'Ошибка номер 300'],
    [400, 'Unknown error'],
  ];
  test.each(cases)('function "translate" should to return a string', (code, expected) => {
    expect(customErrors.translate(code)).toBe(expected);
  });
});
