import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player: Fighter | Character, 
    private _enemies: (Fighter | SimpleFighter | Monster)[],
  ) {
    super(_player);
    this._player = _player;
    this._enemies = _enemies;
  }

  fight(): number {
    this._enemies.forEach((e) => {
      this._player.attack(e);
      e.attack(this._player);
    });
    return super.fight();
  }
}