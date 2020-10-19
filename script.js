let name = "Mitch Cuckovich";
let age = 25;
let birthday = "January 24";
let counter = 0;
const detroitGC = true;
let lifeEvents = ["I was born in Troy, Michigan.", "I went to Hope College", "I went to Junior Olympics when I was 10 years old. I placed 14th in the nation in the 800 meter event.", "I'm a graduate of the front-end bootcamp."];

if(detroitGC === true) {
	console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}
else{
	console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}

for (let i = 0; i < lifeEvents.length; i++){
	console.log(`${lifeEvents[i]}`);
}

// Random Number Math.Floor

while(true){
	let randomNumber = Math.floor(Math.random()*10 + 1);
	if(randomNumber !==5){
		counter++;
		console.log(`${randomNumber} !== 5`)
	}
	else{
		counter++;1
		console.log(`5===5. it took ${counter} iterations to randomly generate the number 5.`)
		break;
	}
}

