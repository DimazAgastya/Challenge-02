checkEmail = (email) => {
	var ketentuanEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (ketentuanEmail.test(email) && typeof email === "string") {
		return "VALID";
	} else if (email !== ketentuanEmail && typeof email === "string") {
		return "INVALID";
	} else {
		return "ERROR";
	}
};

console.log(checkEmail("apranata@binar.co.id")); // valid
console.log(checkEmail("apranata@binar.com")); // valid
console.log(checkEmail("apranata@binar")); //invlalid
console.log(checkEmail("apranata")); // invalid => ERROR
console.log(checkTypeNumber(checkEmail(3222))); // error karena tidak sesuai dengan parameter dan juga nama fungction
console.log(checkEmail()); // error
