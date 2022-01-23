class Player {
  set name(n) {
    this._name = n;
  }
  set level(l) {
    this._level = l;
  }
  set type(t) {
    this._type = t;
  }
  set weapon(w) {
    this._weapon = w;
  }
  set health(h) {
    this._health = h;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get type() {
    return this._type;
  }
  get weapon() {
    return this._weapon;
  }
  get health() {
    return this._health;
  }
  constructor(n) {
    return (this._name = n);
  }

  reset() {
    // Start/Restart the Game
    this._level = "5";
    this._type = "Peasant";
    this._weapon = "Saber";
    this._health = 5;
  }
  getAllInfo() {
    // Returns the Status
    if (parseInt(this._health) === 0) {
      this._health = this.name + " Died!";
      return this.health;
    } else {
      return `
      Name: ${this.name} 
      Weapon: ${this.weapon}
      Health: ${this.health}
        `;
    }
  }
}

let p1 = new Player("Hercules");
console.log(p1.reset());
console.log(p1.getAllInfo());
