function convertBinary(n) {
	return (n >>> 0).toString(2);
}

function evaluateBinaryValues(a) {
	let operator = a.split(/[0-9]/).join("").split("");
	// document.write(operator)
	let values = a.split(/[\+\-\*\/]/);
	let str = parseInt(values[0], 2);
	let j = 1;
	for (let i = 0; i < operator.length; i++) {
		str += operator[i] + parseInt(values[j], 2);
		j++
	}
	return convertBinary(eval(str));
	
}


let res = document.getElementById("res");

let btn0 = document.getElementById("btn0");
btn0.onclick = () => {
	res.innerHTML += "0";
};

let btn1 = document.getElementById("btn1");
btn1.onclick = () => {
	res.innerHTML += "1";
}

let btnClr = document.getElementById("btnClr");
btnClr.onclick = () => {
	res.innerHTML = "";
}

let btnEql = document.getElementById("btnEql");
btnEql.onclick = () => {
	res.innerHTML = evaluateBinaryValues(res.innerHTML);
}

let btnSum = document.getElementById("btnSum");
btnSum.onclick = () => {
	res.innerHTML += "+";
}

let btnSub = document.getElementById("btnSub");
btnSub.onclick = () => {
	res.innerHTML += "-";
}

let btnMul = document.getElementById("btnMul");
btnMul.onclick = () => {
	res.innerHTML += "\*";
}

let btnDiv = document.getElementById("btnDiv");
btnDiv.onclick = () => {
	res.innerHTML += "\/";
}


let r = evaluateBinaryValues("11011+1000/10");