export default class ErrorRepository {
  constructor() {
    this.store = new Map([
      [100, 'Ошибка номер 100'],
      [200, 'Ошибка номер 200'],
      [300, 'Ошибка номер 300'],
    ]);
  }

  translate(code) {
    return this.store.has(code) ? this.store.get(code) : 'Unknown error';
  }
}
