const {
  makeDino,
  makeExtinct,
  truncateSpecies,
  makeSingular,
} = require('./main.js')


describe('makeDino', () => {
  it(`given a species name, a period, a diet, and an extinct status of true, returns a dinosaur object with those values`, () => {
    const expectedDino1 = {
      species: 'Eoraptor',
      period: 'Triassic',
      carnivore: true,
      extinct: true
    }

    const expectedDino2 = {
      species: 'Stegosaurus',
      period: 'Cretaceous',
      carnivore: false,
      extinct: true
    }

    const dino1 = makeDino('Eoraptor', 'Triassic', true, true);
    const dino2 = makeDino('Stegosaurus', 'Cretaceous', false, true);

    expect(dino1).toEqual(expectedDino1)
    expect(dino2).toEqual(expectedDino2)
  });

  it(`allows us to create a dinosaur that is not extinct`, () => {
    const expectedDino1 = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: false,
    }

    const expectedDino2 = {
      species: 'Plesiosaur',
      period: 'Triassic',
      carnivore: true,
      extinct: false,
    }

    const dino1 = makeDino('Brachiosaurus', 'Jurassic', false, false)
    const dino2 = makeDino('Plesiosaur', 'Triassic', true, false)

    expect(dino1).toEqual(expectedDino1)
    expect(dino2).toEqual(expectedDino2)
  })

  it(`if no parameter is passed for extinct, default to false`, () => {
    const expectedDino1 = {
      species: 'Pteranodon',
      period: 'Jurassic',
      carnivore: true,
      extinct: false,
    }

    const expectedDino2 = {
      species: 'Dimetrodon',
      period: 'Cretaceous',
      carnivore: true,
      extinct: false,
    }

    const dino1 = makeDino('Pteranodon', 'Jurassic', true)
    const dino2 = makeDino('Dimetrodon', 'Cretaceous', true)

    expect(dino1).toEqual(expectedDino1)
    expect(dino2).toEqual(expectedDino2)
  })
})

describe('makeExtinct', () => {
  it(`returns a new dinosaur with its extinct set to true`, () => {
    const dino1 = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: false
    };

    const extinctDino1 = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: true
    };

    const dino2 = {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: false
    };

    const extinctDino2 = {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: true
    };

    expect(makeExtinct(dino1)).toEqual(extinctDino1);
    expect(makeExtinct(dino2)).toEqual(extinctDino2);
  })

  it(`does not mutate the original object`, () => {
    const dinoTemplate = {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: false
    };

    const dino = {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: false
    };

    makeExtinct(dino)
    
    expect(dino).toEqual(dinoTemplate);
  })
})

describe('truncateSpecies', () => {
  it(`returns a new dinosaur with its species truncated to 7 characters`, () => {
    const dino = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: true
    };

    const truncatedDino = {
      species: 'Brachio...',
      period: 'Jurassic',
      carnivore: false,
      extinct: true
    };

    expect(truncateSpecies(dino)).toEqual(truncatedDino);
  })

  it(`returns the dinosaur unchanged if its species name length is 10 or less`, () => {
    const dino = {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: true
    };
    
    expect(truncateSpecies(dino)).toEqual(dino);
  })

  it(`does not mutate the original object`, () => {
    const dinoTemplate = {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: true
    };

    const dino = {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: true
    };

    truncateSpecies(dino)
    
    expect(dino).toEqual(dinoTemplate);
  })
})

describe('makeSingular', () => {
  it(`given a dinosaur object, returns a new dinosaur object with the "us" suffix removed from its species`, () => {
    const dino = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: true
    };

    const expectedDino = {
      species: 'Brachiosaur',
      period: 'Jurassic',
      carnivore: false,
      extinct: true
    };

    expect(makeSingular(dino)).toEqual(expectedDino)
  })

  it(`returns the dinosaur species intact if it does not end with 'us'`, () => {
    const dino = {
      species: 'Eoraptor',
      period: 'Triassic',
      carnivore: true,
      extinct: false
    }

    expect(makeSingular(dino)).toEqual(dino)
  })

  it(`does not mutate the original dinosaur object`, () => {
    const dinoTemplate = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: true
    };

    const dino = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: true
    };

    makeSingular(dino);
    expect(dino).toEqual(dinoTemplate);
  })
})
