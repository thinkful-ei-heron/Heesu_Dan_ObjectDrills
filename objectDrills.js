let loaf = {
  flour: 300,
  water: 210
};

loaf.hydration = function() {
  return (this.flour / this.water) * 100;
};

console.log(loaf.hydration());

let object = {
  foo: 1,
  bar: 2,
  fum: 3,
  quux: 4,
  spam: 5
};

for (let key in object) {
  console.log(object[key]);
}

let obj = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(obj.meals[3]);

let employee = [
  { name: 'heesu', jobTitle: 'student' },
  { name: 'Dan', jobTitle: 'student' },
  { name: 'amy', jobTitle: 'student' }
];
for (let i = 0; i < employee.length; i++) {
  console.log(employee[i].name + ' ' + employee[i].jobTitle);
}

//add Boss key
for (let i = 0; i < employee.length; i++) {
  employee[i].boss = 'andrea';
}

employee.push({ name: 'andrea', jobTitle: 'Teacher' });

for (let i = 0; i < employee.length; i++) {
  if (employee[i].hasOwnProperty('boss'))
    console.log(employee[i].jobTitle + ' ' + employee[i].name + ' reports to ' + employee[i].boss + '.');
  else console.log(`${employee[i].jobTitle} ${employee[i].name} doesn't report to anybody.`);
}

let cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
};
let test = 'craft block argon meter bells brown croon droop'.split(' ');

function decode(encode) {
  let word = '';
  for (let i = 0; i < encode.length; i++) {
    let first = encode[i].charAt(0);
    if (cipher.hasOwnProperty(first)) {
      word += encode[i].charAt(cipher[first] - 1);
    } else {
      word += ' ';
    }
  }
  return word;
}

console.log(decode(test));

function lotr(name, nickname, race, origin, attack, defense, weapon) {
  return {
    name: name,
    nickname: nickname,
    race: race,
    origin: origin,
    attack: attack,
    defense: defense,
    weapon: weapon,
    describe: function() {
      return `${this.name} is a ${this.race} from ${this.origin} who uses a ${this.weapon}`;
    },
    evaluateFight: function(char) {
      let x = 0;
      let y = 0;
      if (char.defense > this.attack) x = 0;
      else x = this.attack - char.defense;
      if (this.defense > char.attack) y = 0;
      else y = char.attack - this.defense;
      return `Your opponent takes ${x} damage and you receive ${y} damage`;
    }
  };
}

let characters = [
  lotr('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'staff'),
  lotr('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'ring'),
  lotr('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'Barrow Blade'),
  lotr('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril'),
  lotr('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'Bow and Arrow'),
  lotr('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 1, 1, 'Hadhafang')
];

//console.log(characters[3]);

let aragorn = characters.find(el => el.nickname === 'aragorn');

console.log(aragorn.describe());

let hobbits = characters.filter(el => el.race === 'Hobbit');

let attackGT5 = characters.filter(el => el.attack > 5);

console.log(attackGT5);
