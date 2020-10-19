// Your code below.
const makeDino = function(newSpecies, newPeriod, newCarnivore, newExtinct) {
  const newDino = {species: newSpecies, period: newPeriod, carnivore: newCarnivore, extinct: newExtinct};
  if(newExtinct === undefined) {newDino.extinct = false};
  return newDino;
}

const makeExtinct = function(dino) {
  const newDino =  makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);
  newDino.extinct = true;
  return newDino;
}

const truncateSpecies = function(dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);
  if(newDino.species.length > 7) {newDino.species = `${newDino.species.slice(0, 7)}...`};
  return newDino;
}

const makeSingular = function(dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);
  if(newDino.species.endsWith('us')) {newDino.species = newDino.species.slice(0, newDino.species.indexOf('us'))}
  return newDino;
}

// Our code below; DO NOT TOUCH!
if (typeof makeDino === 'undefined') {
  makeDino = undefined;
}

if (typeof makeExtinct === 'undefined') {
  makeExtinct = undefined;
}

if (typeof truncateSpecies === 'undefined') {
  truncateSpecies = undefined;
}

if (typeof makeSingular === 'undefined') {
  makeSingular = undefined;
}


module.exports = {
  makeDino,
  makeExtinct,
  truncateSpecies,
  makeSingular,
}
