class Gigantosaurus {
  constructor(name) {
    this.name = name;
  }
  roar() {
    return this.name + " says: roooooooar";
  }
}

class Tyrannosaurus extends Gigantosaurus {
  constructor(name) {
    super(name);
  }
  growl() {
    return this.name + " says groooooooowl";
  }
}

class Velociraptor extends Tyrannosaurus {
  constructor(name) {
    super(name);
  }
  awk() {
    return this.name + " says: awk awk awwwwwwwk";
  }
}

function() {
  const selection = document.querySelector('input[name="sound"]:checked');
  const selectionResult = document.getElementById("test-results");
let message = "";

switch (selection?.id) {
  case "giga":
    message = giga.roar();
    break;
  case "tyrann":
      message = tyrann.growl();
      break;
  case "veloc":
    message = veloc.awk();
    break;
  default:
    alert("invalid selection, please try again!");
    return;
}
selectionResult.textContent = message;

}

button.addEventListener("click", display);
