function RankedLevel(victories, defeats) {
    // Calculate the victory balance
    const victoryBalance = victories - defeats;

    // Define the levels in an array for easier comparison
    const levels = ["Iron", "Bronze", "Silver", "Gold", "Diamond", "Legendary"];

    // Set the default level to "Immortal" in case no range matches
    let level = "Immortal";

    // Iterate through the victory ranges for each level
    for (let i = 0; i < levels.length; i++) {
        const minVictories = i * 11;
        const maxVictories = minVictories + 10;

        // Check if the victory balance is within the current range
        if (victoryBalance >= minVictories && victoryBalance <= maxVictories) {
            level = levels[i]; // Set the corresponding level
            break; // End the loop as we've already found the appropriate level
        }
    }

    // Return the output message
    return `The Hero has a victory balance of ${victoryBalance} and is at the level of ${level}!`;
}

// Example of usage
const victories = 130;
const defeats = 19;
const result = RankedLevel(victories, defeats);
console.log(result);
