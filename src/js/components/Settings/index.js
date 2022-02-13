export default class Settings {
  constructor(settings) {
    this.default = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.user = new Map(Object.entries(settings));
  }

  get settings() {
    const resultSettings = new Map(this.default.entries());
    for (const [key, value] of this.user.entries()) {
      resultSettings.set(key, value);
    }
    return resultSettings;
  }
}
