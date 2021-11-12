const MAX_LIFE = 100;

const rollDice = (max) => 1 + Math.floor(Math.random() * max);

class Fighter {
  life = MAX_LIFE;

  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
  }

  fight(opponent) {
    const damage = Math.max(rollDice(this.strength) - opponent.dexterity, 0);

    opponent.life = Math.max(opponent.life - damage, 0);
  }

  isAlive() {
    return this.life > 0;
  }
}

module.exports = Fighter;
