isValidPassword = (email) => {
	let KetentuanPassword = /^[\s\S]{8,}$/,
		upper = /[A-Z]/,
		lower = /[a-z]/,
		number = /[0-9]/;

	if (KetentuanPassword.test(email) && upper.test(email) && lower.test(email) && number.test(email)) {
		return true;
	} else if (typeof email !== "string" || typeof email === "undefined") {
		return "ERROR";
	} else {
		return false;
	}
};

/* methhod test digunakan untuk mengecek kesesuaian kondisi yang telah ditentukan */

console.log(isValidPassword("Meong2021")); //  true
console.log(isValidPassword("meong2021")); // false
console.log(isValidPassword("@eong")); // false
console.log(isValidPassword("Meong2")); // false
console.log(isValidPassword(0)); // error Karena tidak termasuk string dan juga tidak memenuji syarat ketentuan password
console.log(isValidPassword()); /* error */
