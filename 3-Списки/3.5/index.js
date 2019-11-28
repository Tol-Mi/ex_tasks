function ascSorted(list) {
    let sorted = false;
    for(let i = 0; i < list.length - 1; i++) {
        if(list[i][0] <= list[i + 1][0]) {
            sorted = true;
        }
        else {
            sorted = false;
            break;
        }
    }
    return sorted;
}

function descSorted(list) {
    let sorted = false;
    for(let i = 0; i < list.length - 1; i++) {
        if(list[i][0] >= list[i + 1][0]) {
            sorted = true;
        }
        else {
            sorted = false;
            break;
        }
    }
    return sorted;
}

let list = [
    [6, 6, null],
    [5, 7, 2],
    [1, 1, 6],
    [3, 18, 7],
    [2, null, 1]
];

if(ascSorted(list) == true || descSorted(list) == true) {
    console.log('Список отсортирован');
}
else {
    console.log('Список не отсортирован');
}
