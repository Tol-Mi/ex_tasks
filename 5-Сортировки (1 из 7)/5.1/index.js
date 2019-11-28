function bubbleSort(arr) {
	let temp;
	for (let i = 0; i < arr.length; i++) {
		for(let j = 0 ; j < arr.length - i - 1; j++) {
	  		if (arr[j] > arr[j + 1]) {
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
	  		}
	 	}
	}
	return arr;
}

function selectionSort(arr) {
    let temp;
	for(let i = 0; i < arr.length; i++) {
		let mi = i;
        for(var j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[mi]) {
				mi = j;
			}
		}
        temp = arr[i];
        arr[i] = arr[mi];
        arr[mi] = temp;
	}
	return arr;
}

let arr = [1, 9, 2, 3, 7, 6, 4, 5, 5]

console.log(bubbleSort(arr));

console.log(selectionSort(arr));