export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error(`character ${character?.name}[${character.type}] is already in the team`);
    }
    this.members.add(character);
  }

  addAll(...args) {
    args.forEach((character) => {
      this.add(character);
    });
  }

  toArray() {
    return [...this.members];
  }
}
