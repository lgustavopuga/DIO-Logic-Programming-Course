//Challenge 01 - Hero Level Classifier.ts
// my variables
let myHero = "Thunderbolt";
let xpPoints = 1337;

// decision structure
const levels = {
  "Iron": 0,
  "Bronze": 1001,
  "Silver": 2001,
  "Gold": 5001,
  "Platinum": 7001,
  "Ascendant": 8001,
  "Immortal": 9001,
  "Radiant": 10001
};

// Now assign the value of heroLevel after having a value for xpPoints
let heroLevel;

if (xpPoints >= levels.Radiant) {
  heroLevel = "Radiant";
} else if (xpPoints >= levels.Immortal) {
  heroLevel = "Immortal";
} else if (xpPoints >= levels.Ascendant) {
  heroLevel = "Ascendant";
} else if (xpPoints >= levels.Platinum) {
  heroLevel = "Platinum";
} else if (xpPoints >= levels.Gold) {
  heroLevel = "Gold";
} else if (xpPoints >= levels.Silver) {
  heroLevel = "Silver";
} else if (xpPoints >= levels.Bronze) {
  heroLevel = "Bronze";
} else {
  heroLevel = "Iron";
}

// output
console.log(`The hero named ${myHero} is level ${heroLevel}!`);
