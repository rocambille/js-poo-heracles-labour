import Fighter from "./Fighter.js";
import Weapon from "./Weapon.js";
import Shield from "./Shield.js";

const heracles = new Fighter("Héraclès", 20, 6, "heracles.svg");

const sword = new Weapon();
heracles.weapon = sword;

const shield = new Shield();
heracles.shield = shield;

const boar = new Fighter("Erymanthian Boar", 25, 12, "boar.svg");

const main = document.querySelector("main");

let round = 1;

while (heracles.isAlive() && boar.isAlive()) {
  heracles.fight(boar);
  boar.fight(heracles);

  const section = document.createElement("section");
  section.innerHTML = `
    <h2 class="number">Round ${round}</h2>
    <div class="life">
      <div>${heracles.life}</div>
      <progress max="${Fighter.MAX_LIFE}" value="${heracles.life}"></progress>
      <progress max="${Fighter.MAX_LIFE}" value="${boar.life}"></progress>
      <div>${boar.life}</div>
    </div>
  `;
  section.className = "round";
  main.appendChild(section);

  round++;
}

const div = document.createElement("div");

if (heracles.isAlive()) {
  div.innerHTML = `
    <p>💀 ${boar.name} is dead</p>
    <p>🏆 ${heracles.name} wins (💙 ${heracles.life})</p>
  `;
} else {
  div.innerHTML = `
    <p>💀 ${heracles.name} is dead</p>
    <p>🏆 ${boar.name} wins (💙 ${boar.life})</p>
  `;
}

div.className = "win";
main.appendChild(div);

document.querySelector(".heracles img").src = `assets/images/${
  heracles.image ?? "fighter.svg"
}`;
document.querySelector(".monster img").src = `assets/images/${
  boar.image ?? "fighter.svg"
}`;

document.querySelector("#hero").innerHTML = `
  <a href="#" class="close">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-x"
      viewBox="0 0 16 16"
    >
      <path
        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  </a>
  <div class="slots equipment">
    <div data-slot="Main weapon" class="slot">
      ${
        heracles.weapon?.image
          ? `<img src="assets/images/${heracles.weapon.image}" alt="weapon" />`
          : ""
      }
    </div>
    <div data-slot="Shield" class="slot">
      ${
        heracles.shield?.image
          ? `<img src="assets/images/${heracles.shield.image}" alt="shield" />`
          : ""
      }
    </div>
    <div data-slot="Secondary weapon" class="slot"></div>
    <div data-slot="Head" class="slot"></div>
    <div data-slot="Ring" class="slot"></div>
    <div data-slot="Armory" class="slot"></div>
    <div data-slot="Attack" class="slot statistic">
      ${heracles.damage ?? ""}
    </div>
    <div data-slot="Defense" class="slot statistic">
      ${heracles.defense ?? ""}
    </div>
    <div data-slot="Life" class="slot statistic">
      ${heracles.life}
    </div>
    <div data-slot="Magic" class="slot statistic"></div>
  </div>
  <div class="character">
    <h2 class="name">${heracles.name}</h2>
    <div class="avatar">
      <img src="assets/images/${
        heracles.image ?? "fighter.svg"
      }" alt="heracles" />
    </div>
    <p class="level">Level 1</p>
  </div>

  <div class="slots inventory">
    <div class="slot"></div>
    <div class="slot"></div>
    <div class="slot"></div>
    <div class="slot"></div>
    <div class="slot"></div>
    <div class="slot"></div>
    <div class="slot"></div>
    <div class="slot"></div>
    <div class="slot"></div>
    <div class="slot"></div>
  </div>
`;
