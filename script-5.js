getSplitName = (personName) => {
	if (typeof personName === "string") {
		const pemisahanNama = personName.split(" ");
		{
			if (pemisahanNama.length < 2) {
				const namaArray1 = {
					firstName: pemisahanNama[0],
					middleName: null,
					lastName: null,
				};
				return namaArray1;
			} else if (pemisahanNama.length < 3) {
				const namaArray2 = {
					firstName: pemisahanNama[0],
					middleName: null,
					lastName: pemisahanNama[1],
				};
				return namaArray2;
			} else if (pemisahanNama.length < 4) {
				const namaArray3 = {
					firstName: pemisahanNama[0],
					middleName: pemisahanNama[1],
					lastName: pemisahanNama[2],
				};
				return namaArray3;
			} else {
				return "ERROR: This function is only for 3 characters name ";
			}
		}
	} else {
		return "ERROR : String is a must !!";
	}
};

console.log(getSplitName("Aldi Daniela Pranata")); // benar
console.log(getSplitName("Dwi Kuncoro")); // benar
console.log(getSplitName("Aurora")); // benar
console.log(getSplitName("Aurora Aureliya Sukma Darma")); // > 3
console.log(getSplitName(0)); // string only
