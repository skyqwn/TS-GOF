import Player from "./Player";

export default class EvneBettingPlayer extends Player {
  constructor(name: string) {
    super(name);
  }
  update(diceNumber: number): void {
    this._winnig = diceNumber % 2 === 0;
  }
}
