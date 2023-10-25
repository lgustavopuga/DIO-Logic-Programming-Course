// Class that represents a hero in an adventure
class Hero {
    // Hero properties
    name: string;
    age: number;
    type: string;
  
    // Class constructor
    constructor(name: string, age: number, type: string) {
      // Initialize hero properties
      this.name = name;
      this.age = age;
      this.type = type;
    }
  
    // Method that attacks the enemy
    attack() {
      // Define the type of attack based on the hero type
      const attack = this.type === "mage" ? "magic" : this.type === "warrior" ? "sword" : this.type === "monk" ? "martial arts" : "shuriken";
  
      // Print a message with the hero type and the attack type
      console.log(`the ${this.type} attacked using ${attack}`);
    }
  }
  
  // Create a hero of the mage type
  const mage = new Hero("Mage", 30, "mage");
  
  // Attack the enemy
  mage.attack(); // "the mage attacked using magic"
  
  // Create a hero of the warrior type
  const warrior = new Hero("Warrior", 25, "warrior");
  
  // Attack the enemy
  warrior.attack(); // "the warrior attacked using sword"
  
  // Create a hero of the monk type
  const monk = new Hero("Monk", 20, "monk");
  
  // Attack the enemy
  monk.attack(); // "the monk attacked using martial arts"
  
  // Create a hero of the ninja type
  const ninja = new Hero("Ninja", 15, "ninja");
  
  // Attack the enemy
  ninja.attack(); // "the ninja attacked using shuriken"
  
