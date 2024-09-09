class HelpTable {
  constructor(moves) {
    this.moves = moves;
  }

  generateTable() {
    const numMoves = this.moves.length;
    const cellWidth = 15; // Width of each cell for alignment

    // Create header row
    let header = "pc/player".padEnd(cellWidth); // Top-left cell
    this.moves.forEach((move) => {
      header += move.padEnd(cellWidth);
    });
    console.log(header);

    // Create table rows
    for (let i = 0; i < numMoves; i++) {
      let row = this.moves[i].padEnd(cellWidth); // Move name column

      for (let j = 0; j < numMoves; j++) {
        let cell;
        if (i === j) {
          cell = "Draw";
        } else {
          const half = Math.floor(numMoves / 2);
          cell = j < (i + half) % numMoves ? "Win" : "Lose";
        }
        row += cell.padEnd(cellWidth);
      }
      console.log(row);
    }
  }
}
module.exports = HelpTable;
