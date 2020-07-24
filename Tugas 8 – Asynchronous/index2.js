var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
readBooksPromise(10000, books[0])
.then(function(time){
	readBooksPromise(time, books[1])
	.then(function(time){
		readBooksPromise(time,books[2])
		.then(function(time){
			console.log("buku saya telah selesai dibaca semua")
		})
		.catch(function(time){
			console.log(`saya butuh waktu tambahan ${time*-1} untuk baca buku itu`)
		})
	})
	.catch(function(time){
		console.log(`saya butuh waktu tambahan ${time*-1} untuk baca buku itu`)
	})
})
.catch(function(time){
	console.log(`saya butuh waktu tambahan ${time*-1} untuk baca buku itu`)
})