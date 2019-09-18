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

let employee = [{name: 'heesu', jobTitle: 'student'}, {name: 'Dan', jobTitle: 'student'},
{name: 'amy', jobTitle: 'student'}];
for(let i=0; i<employee.length; i++) {
  console.log(employee[i].name + ' ' + employee[i].jobTitle);
};
