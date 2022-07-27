class Person {
	constructor(name = "Tom", age = "20", energy = 100) {
		this.name = name;
		this.age = age;
		this.energy = energy;
	}

	sleep() {
		this.energy *= 0.1;
	}
	doSomethingFun() {
		this.energy /= 0.1;
	}
}

class Worker extends Person {
	constructor(name, age, energy, xp = 0, hourlyWage = 10) {
		super(name, age, energy);
		super.sleep();
		super.doSomethingFun();
		this.xp = xp;
		this.hourlyWage = hourlyWage;
	}
	goToWork() {
		this.xp += 10;
	}
}

var intern = new Worker("Bob", 23, 110, 10, 10);
var manager = new Worker("Juan", 46, 200, 20, 20);
console.log(intern.goToWork());
manager.doSomethingFun();
