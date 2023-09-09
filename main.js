//Задача 1.

const person = {
    city: 'Moscow'
};

const personIvan = Object.create(person);
personIvan.ownCity = 'Samara';
personIvan.age = 20;

function checkProp(obj) {
    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            console.log(key);
        }
    }
}

checkProp(personIvan);

//Задача 2.

function checkProperty(obj, str) {
    console.log(obj.hasOwnProperty(str));
}

checkProperty(personIvan, 'age');

//Задача 3.

function createObj() {
    const obj = Object.create(null);
    return obj;
}

//Задача 4.

function Electro(name, power) {
    this.name = name,
    this.power = power
}

Electro.prototype.turnOn = function() {
    this.state = true;
}

Electro.prototype.turnOff = function() {
    this.state = false;
}

Electro.prototype.getPower = function() {
    if (this.state) {
        return this.power;
    } else {
        return this.power = 0;
    }
}

function Grill(name, power, color, mode) {
    this.name = name,
    this.power = power,
    this.color = color,
    this.mode = mode
}

Grill.prototype = new Electro();
Grill.prototype.showCookingTime = function(minutes) {
    console.log(`Время приготовления блюда ${minutes} минут`);
}

function Monitor (name, power, size, matrix) {
    this.name = name,
    this.power = power,
    this.size = size,
    this.matrix = matrix
}

Monitor.prototype = new Electro();
Monitor.prototype.showErrorMessage = function() {
    console.log(`Кабель не подключен!`);
}

const homeGrill = new Grill('Tefal', 850, 'black', 7);
const homeMonitor = new Monitor('Dell', 20, 24, 'ips');

homeGrill.turnOn();
homeMonitor.turnOn();

function sumPower(array) {
    let count = 0;
    array.forEach(element => {
        count += element.getPower();
    });
    return count;
}

console.log(sumPower([homeGrill, homeMonitor]));

//Задача 5

class Electro {
    constructor(name, power) {
        this.name = name;
        this. power = power;
    }
    turnOn() {
        this.state = true;
    }
    turnOff() {
        this.state = false;
    }
    getPower() {
        if(this.state) {
            return this.power;
        } else {
            return this.power = 0;
        }
    }
}

class Grill extends Electro {
    constructor(name, power, color, mode) {
        super(name, power);
        this.color = color;
        this.mode = mode;
    }
    showCookingTime(minutes) {
        console.log(`Время приготовления блюда ${minutes} минут`);
    }
}

class Monitor extends Electro {
    constructor(name, power, size, matrix) {
        super(name, power);
        this.size = size,
        this.matrix = matrix
    }
    showErrorMessage() {
        console.log(`Кабель не подключен!`);
    }
}

const kitchenGrill = new Grill('Tefal', 850, 'black', 7);
const deskMonitor = new Monitor('Dell', 20, 24, 'ips');

kitchenGrill.turnOn();
deskMonitor.turnOn();

function sumPower(array) {
    let count = 0;
    array.forEach(element => {
        count += element.getPower();
    });
    return count;
}

console.log(sumPower([kitchenGrill, deskMonitor]));

