export default class Tiger {
  private _name: string | null = null;

  set name(v: string) {
    this._name = v;
  }

  get name() {
    return this._name;
  }

  roar(): string {
    return "으르릉~";
  }
}
