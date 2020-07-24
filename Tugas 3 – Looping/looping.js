// NOMOR 1

console.log("NOMOR 1")
console.log("LOOPING PERTAMA")
var i
i = 2
while(i <= 20){
	console.log(i + " - I love coding")
	i += 2
}
console.log("LOOPING KEDUA")
i = 20
while(i >= 2){
	console.log(i + " - I will become a mobile developer")
	i -= 2
}


// NOMOR 2

console.log("NOMOR 2")
for (var i = 1; i <= 20; i++) {
	if (i%3 == 0 && i%2 == 1) {
		console.log(i + " - I Love Coding")
	} else if (i%2 == 1) {
		console.log(i + " - Santai")
	} else if (i%2 == 0) {
		console.log(i + " - Berkualitas")
	}
}


// NOMOR 3

console.log("NOMOR 3")
for (var i = 0; i < 4; i++) {
	for (var j = 0; j < 8; j++) {
		process.stdout.write("#")
	}
	console.log("")
}


// NOMOR 4

console.log("NOMOR 4")
for (var i = 0; i < 7; i++) {
	for (var j = 0; j <= i; j++) {
		process.stdout.write("#")
	}
	console.log("")
}


// NOMOR 5

console.log("NOMOR 5")
for (var i = 0; i < 8; i++) {
	for (var j = 0; j < 8; j++) {
		if (i%2 == 0 && j%2 ==1) {
            process.stdout.write("#")
        } else if (i%2 == 1 && j%2 == 0) {
            process.stdout.write("#")
        } else {
            process.stdout.write(" ")
        }
	}
	console.log("")
}

