const app = "I don't do much."

function bumpCounter() {
  var counter = 0

  function addBump() {
    counter ++;
  }
  function getBumps() {
    return counter;
  }

  return { addBump, getBumps };
}

// var { addBump, getBump } = bumpCounter();

function createAnimal(animalType) {
  function weapon(deadlyDevice) {
    return { animalType: [animalType], deadlyDevice: [deadlyDevice]};
  }

  return weapon;
}

var sharkCreator = createAnimal("Shark")

var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam")
var sharkWithFrickinCannon = sharkCreator("Cannon")
