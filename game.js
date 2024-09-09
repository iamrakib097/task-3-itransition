const KeyGenerator = require("./KeyGenerator");
const HMACGenerator = require("./HMACGenerator");
const Rules = require("./Rules");
const HelpTable = require("./HelpTable");

function main(args) {
  if (args.length < 3 || args.length % 2 === 0) {
    console.error(
      "Error: You must provide an odd number (>= 3) of unique moves."
    );
    console.error("Example: node game.js rock paper scissors");
    return;
  }

  const moves = [...new Set(args)];
  if (moves.length !== args.length) {
    console.error("Error: Moves must be unique.");
    return;
  }

  const key = KeyGenerator.generateKey();
  const computerMove = moves[Math.floor(Math.random() * moves.length)];
  const hmac = HMACGenerator.generateHMAC(key, computerMove);

  console.log(`HMAC: ${hmac}`);
  console.log("Available moves:");
  moves.forEach((move, index) => console.log(`${index + 1} - ${move}`));
  console.log("0 - exit");
  console.log("? - help");

  const rules = new Rules(moves);
  const helpTable = new HelpTable(moves);

  process.stdin.on("data", (input) => {
    const userInput = input.toString().trim();

    if (userInput === "0") {
      console.log("Game exited.");
      process.exit();
    } else if (userInput === "?") {
      helpTable.generateTable();
    } else {
      const userMoveIndex = parseInt(userInput, 10) - 1;
      if (userMoveIndex >= 0 && userMoveIndex < moves.length) {
        const userMove = moves[userMoveIndex];
        console.log(`Your move: ${userMove}`);
        console.log(`Computer move: ${computerMove}`);
        console.log(rules.getWinner(userMove, computerMove));
        console.log(`HMAC key: ${key}`);
        process.exit();
      } else {
        console.log("Invalid move. Try again.");
      }
    }
  });
}

main(process.argv.slice(2));
