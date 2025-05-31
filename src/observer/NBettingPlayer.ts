import Player from "./Player";

export default class NBettingPlayer extends Player {
  constructor(name: string, private ns: Array<number>) {
    super(name);
  }

  update(diceNumber: number): void {
    this._winnig = this.ns.includes(diceNumber);
  }
}
