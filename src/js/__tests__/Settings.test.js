import Settings from '../components/Settings';

describe('class Settings: ', () => {
  const appSettings = new Settings({
    theme: 'light',
    music: 'rock',
  });
  const expected = new Map([
    ['theme', 'light'],
    ['music', 'rock'],
    ['difficulty', 'easy'],
  ]);
  test('should return a new Map with usr settings', () => {
    expect(appSettings.settings).toEqual(expected);
  });
});
