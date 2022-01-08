const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get appetizers() {
      return this._courses.appetizers
    },
    get mains() {
      return this._courses.mains
    },
    get desserts() {
      return this._courses.desserts
    },
    set appetizers(appetizers) {
      this._courses.appetizers = appetizers
    },
    set mains(mains) {
      this._courses.mains = mains
    },
    set desserts(desserts) {
      this._courses.desserts = desserts
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      }
      return this._courses[courseName].push(dish)
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName]
      const randomIndex = Math.floor(Math.random()* dishes.length)
      return dishes[randomIndex]
    },
    generateRandomMeal() {
      const appetizers = this.getRandomDishFromCourse('appetizers')
      const mains = this.getRandomDishFromCourse('mains')
      const desserts = this.getRandomDishFromCourse('desserts')
      const totalPrice = appetizers.price + mains.price + desserts.price
      return `Tu plato sera ${appetizers.name}, ${mains.name}, ${desserts.name} y el precio final es de ${totalPrice}.`
    }
  }
  
  menu.addDishToCourse('appetizers', 'Ensalada Cesar', 4);
  menu.addDishToCourse('appetizers', 'Pan con ajo', 2);
  menu.addDishToCourse('appetizers', 'Arepitas', 2);
  menu.addDishToCourse('mains', 'Arroz con pollo', 10);
  menu.addDishToCourse('mains', 'Pasta con carne molida', 12);
  menu.addDishToCourse('mains', 'Pizza Cuatro Estaciones', 15);
  menu.addDishToCourse('desserts', 'Helado de chocolate', 8);
  menu.addDishToCourse('desserts', 'Churros', 6);
  menu.addDishToCourse('desserts', 'Galletas', 5);
  
  const meal = menu.generateRandomMeal()
  
  console.log(meal)