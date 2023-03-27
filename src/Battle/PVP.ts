import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _player1: Fighter | Character, 
    private _player2: Fighter | Character,
  ) {
    super(_player1);
    this._player1 = _player1;
    this._player2 = _player2;
  }

  fight(): number {
    while (
      this._player1.lifePoints !== -1 && this._player2.lifePoints !== -1
    ) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
    } 

    return super.fight();
  }
}