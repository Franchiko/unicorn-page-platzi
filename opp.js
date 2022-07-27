class Animal {
	constructor(color = "yellow", energy = 100) {
		this.color = color;
		this.energy = energy;
	}
	isActivate() {
		if (this.energy > 0) {
			this.energy -= 20;
			console.log("Energia bajo un 20%, actualmente esta en: " + this.energy);
		} else if (this.energy == 0) {
			this.sleep();
		}
	}
	sleep() {
		console.log("zzzzz");
		this.energy += 20;
		console.log("Tu energia aumento un 20%, actualemente es" + this.energy);
	}
	getColor() {
		console.log(this.color);
	}
}

class Cat extends Animal {
	constructor(
		color,
		energy,
		canJumpingHigh = true,
		sound = "meow",
		canClimbTrees = true
	) {
		super(color, energy);
		this.sound = sound;
		this.canJumpingHigh = canJumpingHigh;
		this.CanCLimbTrees = canClimbTrees;
		super.isActivate();
		super.sleep();
	}
	makeSound() {
		console.log(this.sound);
	}
}

class Birds extends Animal {
	constructor(color, energy, sound = "tweet", canFly = true) {
		super(color, energy);
		this.sound = sound;
		this.canFly = canFly;
	}
	makeSound() {
		console.log(this.sound);
	}
}

class HouseCat extends Cat {
	constructor(
		color,
		energy,
		houseCatSound = "purr",
		sound,
		canJumpingHigh,
		canClimbTrees
	) {
		super(color, energy, houseCatSound, canJumpingHigh, canClimbTrees);
		this.houseCatSound = houseCatSound;
	}
	makeSound(option) {
		if (option) {
			super.makeSound();
		}
		console.log(this.houseCatSound);
	}
}

class Tiger extends Cat {
	constructor(color, energy, sound, tigerSound = "roar", canJumpingHigh, canClimbTrees) {
		super(color, energy, sound, canJumpingHigh, canClimbTrees);
		this.tigerSound = tigerSound;
	}
	makeSound() {
		if (option) {
			super.makeSound();
		}
		console.log(this.tigerSound);
	}
}

class Parrot extends Birds {
	constructor(
		color,
		energy,
		sound,
		canFly,
		canTalk = false,
		canClimbTrees,
		canJumpingHigh
	) {
		super(color, energy, sound, canFly, canClimbTrees, canJumpingHigh);
		this.canTalk = canTalk;
	}
	makeSound(option) {
		if (option) {
			super.makeSound();
		}
		if (this.canTalk) {
			console.log("I'm a talking parrot!");
		}
	}
}

var polly = new Parrot(true);
var fiji = new Parrot(false);

polly.makeSound();
fiji.makeSound();
polly.color;
polly.energy;

var penguin = new Birds("shrek", false, "black", 200);
penguin;

penguin.sound;
penguin.canFly;
penguin.energy;
penguin.isActivate;

var leo = new HouseCat(true);
var lionel = new Tiger();
lionel.makeSound(false);
