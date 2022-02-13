import Team from './js/components/Team';
import Bowman from './js/components/Character/Bowman';
import Magican from './js/components/Character/Magician';
import Swordsman from './js/components/Character/Swordsman';
import Settings from './js/components/Settings';

const myTeam = new Team();

const John = new Bowman({ name: 'John' });
const Mary = new Magican({ name: 'Mary' });
const Seed = new Swordsman({ name: 'Seed' });

const invited = [John, Mary, John, Mary, Mary, Mary, Seed];

invited.forEach((character) => {
  try {
    myTeam.add(character);
  } catch (err) {
    console.error(err.message);
  }
});

try {
  myTeam.addAll(...invited);
} catch (err) {
  console.log(err.message);
}

console.log('MY_TEAM: ', myTeam.members);
console.log('MY_TEAM ARR: ', myTeam.toArray());

const appSettings = new Settings({
  theme: 'light',
  music: 'rock',
});

console.log('default', appSettings.default);
console.log('user', appSettings.user);
console.log('settings', appSettings.settings);
