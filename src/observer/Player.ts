export default abstract class Player {
  protected _winnig: boolean = false;

  constructor(private _name: string) {}

  get name() {
    return this._name;
  }

  get winnig() {
    return this._winnig;
  }

  abstract update(diceNumber: number): void;
}
