// NOMOR 1

console.log("NOMOR 1")
// RELEASE 0
class Animal {
	constructor(name){
		this.name = name
		this.legs = 4
		this.cold_blooded = false
	}
}

var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

// RELEASE 1
class Ape extends Animal{
	constructor(name){
		super(name)
		this.legs = 2
	}
	yell(){
		console.log("Auooo")
	}
}

class Frog extends Animal{
	constructor(name){
		super(name)
	}
	jump(){
		console.log("hop hop")
	}
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"

var kodok = new Frog("buduk")
kodok.jump() // "hop hop"


// NOMOR 2

console.log("NOMOR 2")
class Clock {
    constructor({ template }){
    	this._template = template
    	this._timer
    }
    get template(){
    	return this._template
    }
    get timer(){
    	return this._timer
    }
    set timer(timer){
    	this._timer = timer
    }
    render(){
    	var date = new Date();

	    var hours = date.getHours();
	    if (hours < 10) hours = '0' + hours;

	    var mins = date.getMinutes();
	    if (mins < 10) mins = '0' + mins;

	    var secs = date.getSeconds();
	    if (secs < 10) secs = '0' + secs;

	    var output = this.template
	      .replace('h', hours)
	      .replace('m', mins)
	      .replace('s', secs);

	    console.log(output);
    }
    stop(){
    	clearInterval(this.timer);
    }
    start(){
    	this.render();
    	this.timer = setInterval(this.render.bind(this), 1000);
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();   