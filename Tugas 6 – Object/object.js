// NOMOR 1

console.log("NOMOR 1")
function arrayToObject(arr) {
	var now = new Date()
	var thisYear = now.getFullYear()
	var temp = {}
	for (var i = 0; i < arr.length; i++) {
		var object = {}
		var name = arr[i][0] + " " + arr[i][1]
		object["firstName"] = arr[i][0]
		object["lastName"] = arr[i][1]
		object["gender"] = arr[i][2]
		if (arr[i][3] != null && arr[i][3] <= thisYear) {
			object["age"] = thisYear - arr[i][3]
		} else {
			object["age"] = "Invalid Birth Year"
		}
		console.log(i+1+". "+name+":", object)
		// temp[name] = object
	}
	// console.log(temp)
}

// Driver Code
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
arrayToObject(people) 
/*
    1. Bruce Banner: { 
        firstName: "Bruce",
        lastName: "Banner",
        gender: "male",
        age: 45
    }
    2. Natasha Romanoff: { 
        firstName: "Natasha",
        lastName: "Romanoff",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/
 
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
arrayToObject(people2) 
/*
    1. Tony Stark: { 
        firstName: "Tony",
        lastName: "Stark",
        gender: "male",
        age: 40
    }
    2. Pepper Pots: { 
        firstName: "Pepper",
        lastName: "Pots",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/
 
// Error case 
arrayToObject([]) // ""


// NOMOR 2

console.log("NOMOR 2")
function shoppingTime(memberId, money) {
  if (memberId == null || memberId == "") {
  	return "Mohon maaf, toko X hanya berlaku untuk member saja"
  } else if (money < 50000 || money == null) {
  	return "Mohon maaf, uang tidak cukup"
  } else {
  	var sale = {
  		"Sepatu Stacattu": 1500000,
  		"Baju Zoro": 500000,
  		"Baju H&N": 250000,
  		"Sweater Uniklooh": 175000,
  		"Casing Handphone": 50000,
  	}
  	var productsSale = Object.keys(sale)
  	var listPurchased = []
  	var changeMoney = money
  	for (var i = 0; i < 5; i++) {
  		if (changeMoney-sale[productsSale[i]] >= 0) {
  			listPurchased.push(productsSale[i])
  			changeMoney -= sale[productsSale[i]]
  		}
  	}
  	var buyer = {
  		memberId: memberId,
  		money: money,
  		listPurchased: listPurchased,
  		changeMoney: changeMoney
  	}
  	return buyer
  }
}
 
// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja


// NOMOR 3

console.log("NOMOR 3")
function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var perjalanan = []
  for (var i = 0; i < arrPenumpang.length; i++) {
  	var pindah = 0
  	var dalamRute = false
  	if (arrPenumpang[i][1] != arrPenumpang[i][2]) {
  		for (var j = 0; j < rute.length; j++) {
  			if (dalamRute) {
  				pindah++
  			}
	  		if (rute[j] == arrPenumpang[i][1] || rute[j] == arrPenumpang[i][2]) {
	  			dalamRute = !dalamRute
	  		}
	  	}	
  	}
  	var objectPenumpang = {
  		penumpang: arrPenumpang[i][0],
  		naikDari: arrPenumpang[i][1],
  		tujuan: arrPenumpang[i][2],
  		bayar: 2000*pindah
  	}
  	perjalanan.push(objectPenumpang)
  }
  return perjalanan
}
 
//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
 
console.log(naikAngkot([])); //[]