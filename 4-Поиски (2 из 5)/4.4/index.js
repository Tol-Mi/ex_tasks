function binarySearch(array, element) {
	let i = 0
	let j = array.length - 1;
	let k;

	while(i <= j) {
		k = Math.floor((i + j) / 2);

		if (element === array[k]) {
			return 'Элемент найден на ' + k + ' позиции массива';
		}
		else if(element < array[k]) {
			j = k - 1;
		}
		else {
			i = k + 1;
		}
	}

	return 'Элемент не найден';
}

let array = ['1', '2', '3', '4', '5'];
let element = '3';

console.log(binarySearch(array, element));