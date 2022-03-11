checkTypeNumber = (givenNumber) => {
	if (givenNumber % 2 == 0 && typeof givenNumber == "number") {
		return "GENAP";
	}
	if (givenNumber % 2 == 1 && typeof givenNumber == "number") {
		return "GANJIL";
	} else if (givenNumber === undefined) {
		return "Error: Bro where is the parameter?";
	} else if (typeof givenNumber !== "number") {
		return " Error : invalid data type";
	}
	return checkTypeNumber;
};

console.log(checkTypeNumber(10)); // genap
console.log(checkTypeNumber(3)); // ganjil
console.log(checkTypeNumber("3")); // error
console.log(checkTypeNumber({})); // error
console.log(checkTypeNumber([])); // error
console.log(checkTypeNumber()); // Bro where is the parameter?
