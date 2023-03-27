import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private readonly _lifepoints: number;
  private readonly _strength: number;

  constructor() {
    this._lifepoints = 85;
    this._strength = 63;
  }

  get lifePoints() {
    return this._lifepoints;
  }

  get strength() {
    return this._strength;
  }

  receiveDamage(attackpoints: number): number {
    const damage = attackpoints - this._lifepoints;
    let lifePoints = this._lifepoints;
     
    if ((lifePoints - damage) <= 0) {
      lifePoints = -1;
    }

    return lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}