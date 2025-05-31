import Player from "./Player";

export default class OddBettingPlayer extends Player {
  update(diceNumber: number): void {
    this._winnig = diceNumber % 2 === 1;
  }

  constructor(name: string) {
    super(name);
  }
}
