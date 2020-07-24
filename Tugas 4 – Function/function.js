// NOMOR 1

console.log("NOMOR 1")
function teriak(){
	return "Halo Sanbers!"
}
 
console.log(teriak()) // "Halo Sanbers!" 


// NOMOR 2

console.log("NOMOR 2")
function kalikan(angka1, angka2){
	return angka1 * angka2
}
var num1 = 12
var num2 = 4
var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48


// NOMOR 3

console.log("NOMOR 3")
function introduce(name, age, address, hobby){
	return "Nama saya "+name+", umur saya "+age+" tahun, alamat saya di "+address+", dan saya punya hobby yaitu "+hobby+"!"
}

var name = "Agus"
var age = 30
var address = "Jln. Malioboro, Yogyakarta"
var hobby = "Gaming"
var perkenalan = introduce(name, age, address, hobby)

console.log(perkenalan)