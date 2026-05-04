/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

// Initial Items (Booleans)
const hasTorch = true;
const hasMap = false;
const hasSword = true;    // Added item
const hasCompass = true;  // Added item

console.log("--- Welcome to the Quest for the Lost City ---");
console.log("You wake up in a dark forest. Two paths lie before you.");

const choice = readline.question("Do you go to the 'mountains' or the 'village'? ").toLowerCase();

// SCENARIO 1: The Mountains
if (choice === "mountains") {
    if (hasTorch && hasCompass) {
        console.log("Using your torch and compass, you navigate the treacherous peaks and find a hidden cave!");
        
        const enterCave = readline.question("Do you 'enter' the cave or 'stay' outside? ").toLowerCase();
        
        // Nested Conditional with Logical Operator
        if (enterCave === "enter" && hasSword) {
            console.log("A beast lunges from the shadows, but you defend yourself with your sword. You win!");
        } else {
            console.log("You feel unsafe and decide to head back home. Game Over.");
        }
    } else if (hasTorch && !hasCompass) {
        console.log("You have light, but you walk in circles without a compass. You turn back exhausted.");
    } else {
        console.log("It's pitch black in the mountains. Without a torch, you fall into a ravine. Game Over.");
    }

// SCENARIO 2: The Village
} else if (choice === "village" || hasMap) {
    console.log("You arrive at the village gates.");
    
    // Using a Logical NOT operator
    if (!hasMap) {
        console.log("The guards are suspicious because you don't have a map, but they let you in anyway.");
    } else {
        console.log("You show the guards your map and they welcome you as a traveler.");
    }
    console.log("You enjoy a warm meal at the inn. You are safe!");

// SCENARIO 3: Invalid Input
} else {
    console.log("Confused, you stand still until the sun goes down. You wander aimlessly and get lost.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/