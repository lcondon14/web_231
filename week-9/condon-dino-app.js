class Gigantosaurus {
  constructor(name) {
    this.name = name;
  }
  roar() {
    return `${this.name} says: roooooooar`;
  }
}

class Tyrannosaurus extends Gigantosaurus {
  constructor(name) {
    super(name);
  }
  growl() {
    return `${this.name} says groooooooowl`;
  }
}

class Velociraptor extends Tyrannosaurus {
  constructor(name) {
    super(name);
  }
  awk() {
    return  `${this.name} says: awk awk awwwwwwwk`;
  }
}

const dino = new Velociraptor(selection)

function display() {
  const giga = document.getElementById('giga')
  const tyrann = document.getElementById('tyrann')
  const veloc = document.getElementById('veloc')

  let selection = ''
  if (giga.checked) {
    choice  = "giga";
    result = dino.roar();
  } else if (tyrann.checked) {
    choice = "tyrann";
    result = dino.growl();
  } else if (veloc.checked) {
    choice = "veloc";
    result = dino.awk();
  } else {
    alert('Wrong selection, try again!')
  }



document.getElementById('test-results').innerHTML = results;
}
