import Monster from './Monster';

export default class Dragon extends Monster {
  protected _lifepoints: number;

  constructor() {
    super();
    this._lifepoints = 999;
  }

  get lifePoints() {
    return this._lifepoints;
  }
}