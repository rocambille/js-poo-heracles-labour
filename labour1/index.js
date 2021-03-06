const Fighter = require("./Fighter");

const heracles = new Fighter("π§ HΓ©raclΓ¨s", 20, 6);
const nemeanLion = new Fighter("π¦ Lion de NΓ©mΓ©e", 11, 13);

let round = 1;

while (heracles.isAlive() && nemeanLion.isAlive()) {
  heracles.fight(nemeanLion);
  nemeanLion.fight(heracles);

  console.log(`π Round #${round}`);
  console.log(
    `${heracles.name} π‘οΈ  ${nemeanLion.name}`,
    `π ${nemeanLion.name}: ${nemeanLion.life}`
  );
  console.log(
    `${nemeanLion.name} π‘οΈ  ${heracles.name}`,
    `π ${heracles.name}: ${heracles.life}`
  );

  round++;
}

if (heracles.isAlive()) {
  console.log(`π ${nemeanLion.name} is dead`);
  console.log(`π ${heracles.name} wins (π ${heracles.life})`);
} else {
  console.log(`π ${heracles.name} is dead`);
  console.log(`π ${nemeanLion.name} wins (π ${nemeanLion.life})`);
}
