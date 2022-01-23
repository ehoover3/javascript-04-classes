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
}

let p1 = new Player("Hercules");
console.log(p1.name);
