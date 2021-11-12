const rollDice = (max) => 1 + Math.floor(Math.random() * max);

class Fighter {
  static MAX_LIFE = 100;

  life = Fighter.MAX_LIFE;

  constructor(name, strength, dexterity, image) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.image = image;
  }

  fight(opponent) {
    const damage = Math.max(rollDice(this.damage) - opponent.defense, 0);

    opponent.life = Math.max(opponent.life - damage, 0);
  }

  isAlive() {
    return this.life > 0;
  }

  get damage() {
    let damage = this.strength;

    if (this.weapon) {
      damage += this.weapon.damage;
    }

    return damage;
  }

  get defense() {
    let defense = this.dexterity;

    if (this.shield) {
      defense += this.shield.protection;
    }

    return defense;
  }
}

export default Fighter;
