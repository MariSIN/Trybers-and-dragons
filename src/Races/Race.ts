export default abstract class Race { 
  private _name: string;
  private _dexteriry: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexteriry = dexterity;
  }
  
  get name(): string {
    return this._name;
  }
  
  get dexterity(): number {
    return this._dexteriry;
  }
  
  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  public abstract get maxLifePoints(): number;
}
