var arrayLength;

function heapRoot(input, i) {
	var left = 2 * i + 1;
	var right = 2 * i + 2;
	var max = i;

	if(left < arrayLength && input[left] > input[max]) {
		max = left;
	}

	if(right < arrayLength && input[right] > input[max]) {
		max = right;
	}

	if(max != i) {
		swap(input, i, max);
		heapRoot(input, max);
	}
}

function swap(input, index_A, index_B) {
	var temp = input[index_A];

	input[index_A] = input[index_B];
	input[index_B] = temp;
}

function heapSort(input) {
	arrayLength = input.length;

	for (var i = Math.floor(arrayLength / 2); i >= 0; i -= 1) {
		heapRoot(input, i);
	}

	for (i = input.length - 1; i > 0; i--) {
		swap(input, 0, i);
		arrayLength--;


		heapRoot(input, 0);
	}
}

let arr = [1, 9, 2, 3, 7, 6, 4, 5, 5];
heapSort(arr);
console.log(arr);