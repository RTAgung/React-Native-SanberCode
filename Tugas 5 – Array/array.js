// NOMOR 1

console.log("NOMOR 1")
function range(startNum = "undefined", finishNum = "undefined") {
	if (startNum === "undefined" || finishNum === "undefined") {
		return -1
	} else {
		var temp = []
		if (startNum <= finishNum) {
			for (var i = startNum; i <= finishNum; i++) {
				temp.push(i)
			}
		} else {
			for (var i = startNum; i >= finishNum; i--) {
				temp.push(i)
			}
		}
		return temp
	}
}

console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 


// NOMOR 2

console.log("NOMOR 2")
function rangeWithStep(startNum, finishNum, step) {
	var temp = []
	if (startNum <= finishNum) {
		for (var i = startNum; i <= finishNum; i+=step) {
			temp.push(i)
		}
	} else {
		for (var i = startNum; i >= finishNum; i-=step) {
			temp.push(i)
		}
	}
	return temp
}

console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 


// NOMOR 3

console.log("NOMOR 3")
function sum(startNum = 0, finishNum = 0, step = 1){
	var temp = []
	var add = 0
	if (startNum <= finishNum) {
		for (var i = startNum; i <= finishNum; i+=step) {
			add += i
			temp.push(add)
		}
	} else {
		for (var i = startNum; i >= finishNum; i-=step) {
			add += i
			temp.push(add)
		}
	}
	return temp[temp.length-1]
}

console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 


// NOMOR 4

console.log("NOMOR 4")
function dataHandling(data){
	for (var i = 0; i < data.length; i++) {
		var temp = data[i]
		console.log("Nomor ID: ", temp[0])
		console.log("Nama Lengkap: ", temp[1])
		console.log("TTL: ", temp[2], temp[3])
		console.log("Hobi: ", temp[4])
		console.log()
	}
}

var input = [
	["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
	["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
	["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
	["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

dataHandling(input)


// NOMOR 5

console.log("NOMOR 5")
function balikKata(kata){
	var temp = ""
	var i = kata.length-1
	while(i >= 0){
		temp += kata[i]
		i--
	}
	return temp
}

console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I 


// NOMOR 6

console.log("NOMOR 6")
function convert(bulan){
	var string = ""
	switch(bulan){
		case "01": {string = "Januari"; break}
		case "02": {string = "Februari"; break}
		case "03": {string = "Maret"; break}
		case "04": {string = "April"; break}
		case "05": {string = "Mei"; break}
		case "06": {string = "Juni"; break}
		case "07": {string = "Juli"; break}
		case "08": {string = "Agustus"; break}
		case "09": {string = "September"; break}
		case "10": {string = "Oktober"; break}
		case "11": {string = "November"; break}
		case "12": {string = "Desember"; break}
	}
	return string
}

function dataHandling2(data){
	data.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
	data.splice(4, 1, "Pria", "SMA Internasional Metro")
	console.log(data)

	var tanggal = data[3].split("/")
	var bulan = convert(tanggal[1])
	var stringTanggal = tanggal.join("-")
	var nama = data[1]
	console.log(bulan)
	console.log(tanggal.sort(function(a,b){return b-a}))
	console.log(stringTanggal)
	console.log(nama.slice(0,15))

}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
 
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */ 