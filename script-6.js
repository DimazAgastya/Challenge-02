const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8]; // defined array

getAngkaTerbesarKedua = (dataAngka) => {
	const mengurutkan = dataAngka.sort((a, b) => a - b);
	return mengurutkan[dataAngka.length - 2];
};

console.log(getAngkaTerbesarKedua(dataAngka)); // output : 8
console.log(getAngkaTerbesarKedua(0)); // Error karena 0 bukan merupakan paramterer
console.log(getAngkaTerbesarKedua(1)); // Error karena 1 bukan merupakan paramterer

//error karena  seharusnya yang dipanggil adalah parameter function
