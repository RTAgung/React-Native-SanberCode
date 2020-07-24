// IF-ELSE

var nama = "";
var peran = "";

if(nama == "") {
	console.log("Nama harus diisi!")
} else if (peran == "") {
	console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!")
} else {
	console.log("Selamat datang di Dunia Werewolf, " + nama);
	if (peran == "Penyihir") {
		console.log("Halo Penyihir " + nama + ", kamu dapat melihat siapa yang menjadi werewolf!");
	} else if (peran == "Werewolf") {
		console.log("Halo Werewolf " + nama + ", Kamu akan memakan mangsa setiap malam!");
	} else if (peran == "Guard") {
		console.log("Halo Guard " + nama + ", kamu akan membantu melindungi temanmu dari serangan werewolf.");
	}
}

// SWITCH-CASE

var tanggal; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
tanggal = 2;
bulan = 12;
tahun = 1945;

var sBulan = ""; 
switch(bulan) {
	case 1: {sBulan = "Januari"; break;} 
	case 2: {sBulan = "Februari"; break;}
	case 3: {sBulan = "Maret"; break;}
	case 4: {sBulan = "April"; break;}
	case 5: {sBulan = "Mei"; break;}
	case 6: {sBulan = "Juni"; break;}
	case 7: {sBulan = "Juli"; break;}
	case 8: {sBulan = "Agustus"; break;}
	case 9: {sBulan = "September"; break;}
	case 10: {sBulan = "Oktober"; break;}
	case 11: {sBulan = "November"; break;}
	case 12: {sBulan = "Desember"; break;}
}

console.log(tanggal + " " + sBulan + " " + tahun);