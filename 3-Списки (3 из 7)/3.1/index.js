function highestValueSearch(list) {
    let max = 0;
	for(let i = 0; i < list.length; i++) {
        if(list[i][0] > max) {
            max = list[i][0];
		}
	}
    return max;
}

function addingElementToStart(list, element) {
	for(let i = list.length - 1; i >= 0; i--) {
		list[i + 1] = list[i];
	}
	list[0] = [element, list[1][0]];
	return list;
}

let list = [
    [2, 6],
    [6, 7],
    [7, 1],
    [1, 18],
    [18, null]
];

console.log(highestValueSearch(list));

list = addingElementToStart(list, 999);

console.log(list);
