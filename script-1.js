var changeWord = (selectedText, changeText, text) => {
	if (typeof text === "string"); //1
	{
		return (hasil = text.replace(selectedText, changeText)); // 2
	}
};

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung bromo tak akan menggambarkan besarnya cintaku padamu";

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("Bromo", "Semeru", kalimat2));
