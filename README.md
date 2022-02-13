[![Build status](https://ci.appveyor.com/api/projects/status/d6j8t02bxwpwj4cy/branch/main?svg=true)](https://ci.appveyor.com/project/borison4ik/ajs-map-set/branch/main)

## `Set`

класс `Team` хранит данные о персонажах команды в поле типа `Set`:

### Пример использования

```javascript
import Team from './js/components/Team';
import Bowman from './js/components/Character/Bowman';
import Magican from './js/components/Character/Magician';
import Swordsman from './js/components/Character/Swordsman';

const myTeam = new Team();

const John = new Bowman({ name: 'John' });
const Mary = new Magican({ name: 'Mary' });
const Seed = new Swordsman({ name: 'Seed' });

const invited = [John, Mary, John, Mary, Mary, Mary, Seed];

try {
  myTeam.addAll(...invited);
} catch (err) {
  console.log(err.message);
}

console.log('MY_TEAM ARR: ', myTeam.toArray());
```

- Метод `add` добавляет выбранного персонажа в команду
- Метод `addAll` добавляет произвольное количество персонажей
- Метод `toArray` возвращает массив.

---

## `Map`

класс `ErrorRepository` хранит данные _ключ_ - это код ошибки (число), а _значение_ - текстовое описание (человекочитаемое).

---

## `Settings`

`Getter settings`, который возвращает Map, полученный путём наложения пользовательских настроек, на `default`'ные.
