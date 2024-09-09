class Rules {
  constructor(moves) {
    this.moves = moves;
    this.numMoves = moves.length;
  }

  getWinner(userMove, computerMove) {
    const userIndex = this.moves.indexOf(userMove);
    const computerIndex = this.moves.indexOf(computerMove);

    const half = Math.floor(this.numMoves / 2);

    if (userIndex === computerIndex) {
      return "Draw";
    } else if ((userIndex + half) % this.numMoves >= computerIndex) {
      return "Computer Wins";
    } else {
      return "You Win";
    }
  }
}

module.exports = Rules;
