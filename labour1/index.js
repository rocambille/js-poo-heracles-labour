const Fighter = require("./Fighter");

const heracles = new Fighter("🧔 Héraclès", 20, 6);
const nemeanLion = new Fighter("🦁 Lion de Némée", 11, 13);

let round = 1;

while (heracles.isAlive() && nemeanLion.isAlive()) {
  console.log(`🕛 Round #${round}`);

  heracles.fight(nemeanLion);
  console.log(
    `${heracles.name} 🗡️  ${nemeanLion.name}`,
    `💙 ${nemeanLion.name}: ${nemeanLion.life}`
  );

  nemeanLion.fight(heracles);
  console.log(
    `${nemeanLion.name} 🗡️  ${heracles.name}`,
    `💙 ${heracles.name}: ${heracles.life}`
  );

  round++;
}

if (heracles.isAlive()) {
  console.log(`💀 ${nemeanLion.name} is dead`);
  console.log(`🏆 ${heracles.name} wins (💙 ${heracles.life})`);
} else {
  console.log(`💀 ${heracles.name} is dead`);
  console.log(`🏆 ${nemeanLion.name} wins (💙 ${nemeanLion.life})`);
}
