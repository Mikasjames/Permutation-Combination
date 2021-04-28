const solveButton = document.getElementById('solve-button');
const orderChoice = document.getElementById('order');
const repetitionChoice = document.getElementById('repetition');
const variableR = document.getElementById('r').value;
const variableN = document.getElementById('n').value;
const ynOrder = orderChoice.options[orderChoice.selectedIndex].value;
const ynRepetition = repetitionChoice.options[repetitionChoice.selectedIndex].value;



solveButton.addEventListener('click', () => {
	const ynOrder = orderChoice.options[orderChoice.selectedIndex].value;
	const ynRepetition = repetitionChoice.options[repetitionChoice.selectedIndex].value;
	const variableR = document.getElementById('r').value;
	const variableN = document.getElementById('n').value;
	const numberR = Number(variableR)
	const numberN = Number(variableN)
	solution(numberN, numberR)
})

function solution(num1, num2) {
	const ynOrder = orderChoice.options[orderChoice.selectedIndex].value;
	const ynRepetition = repetitionChoice.options[repetitionChoice.selectedIndex].value;
	if (num1 == num2 && ynOrder === '1' && ynRepetition === '2') {
		const solutionProduct = factorialize(num1);
		alert(solutionProduct)
	} else if (num1 > num2 && ynOrder === '1' && ynRepetition === '2') {
		const solutionProduct = factorialize(num1)/factorialize(num1 - num2)
		alert(solutionProduct)
	} else if (num1 >= num2 && ynOrder === '1' && ynRepetition === '1') {
		const solutionProduct = Math.pow(num1, num2)
		alert(solutionProduct)
	} else if (num1 >= num2 && ynOrder === '2' && ynRepetition === '2') {
		const solutionProduct = factorialize(num1)/(factorialize(num2) * factorialize(num1 - num2))
		alert(solutionProduct)
	} else if (num1 >= num2 && ynOrder === '2' && ynRepetition === '1') {
		const solutionProduct = factorialize((num1 + num2)-1)/(factorialize(num2) * factorialize(num1 - 1))
		alert(solutionProduct)
	} else {
		alert('Make sure that you input a number and n must always be less than r')
	}
}



function factorialize(num) {
	if (num < 0) {
		return (num * factorialize(num + 1));
	} else if (num === 0) {
		return 1;
	} else {
		return (num * factorialize(num - 1));
	}
}


