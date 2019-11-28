function insertionSort(arr) {
	for(let i = 0; i < arr.length; i++) {
		let el = arr[i];
		let j;
		for(j = i - 1; j >= 0 && arr[j] > el; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = el;
	}
	return arr;
}

function shuttleSort(arr) {
    let left = 0;
    let right = arr.length - 1;
    let temp;
    do {
        for(let i = left; i < right; i++) {
            if(arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
        right--;
        for(let i = right; left < i; i--) {
            if(arr[i] < arr[i - 1]) {
                temp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = temp;
            }
        }
        left++;
	} 
	while(left < right);
	
	return arr;
}

let arr = [1, 9, 2, 3, 7, 6, 4, 5, 5];

console.log(insertionSort(arr));

console.log(shuttleSort(arr));