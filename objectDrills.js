let loaf = {
  flour: 300,
  water: 210
};

loaf.hydration = function() {
  return (this.flour / this.water) * 100;
};

console.log(loaf.hydration());
