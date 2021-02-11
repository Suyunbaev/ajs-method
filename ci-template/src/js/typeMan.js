  
import Character from './app';

class Bowman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

class Swordsman extends Character {
    constructor(name, type) {
      super(name, type);
      this.attack = 40;
      this.defence = 10;
    }
  }

  class Magician extends Character {
    constructor(name, type) {
      super(name, type);
      this.attack = 10;
      this.defence = 40;
    }
  }

  class Undead extends Character {
    constructor(name, type) {
      super(name, type);
      this.attack = 25;
      this.defence = 25;
    }
  }

  class Zombie extends Character {
    constructor(name, type) {
      super(name, type);
      this.attack = 40;
      this.defence = 10;
    }
  }

  class Daemon extends Character {
    constructor(name, type) {
      super(name, type);
      this.attack = 10;
      this.defence = 40;
    }
}

export {Daemon, Zombie, Undead, Magician, Swordsman, Bowman}